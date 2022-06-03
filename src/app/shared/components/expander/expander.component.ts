import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BackdropService } from 'src/app/services/backdrop/backdrop.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'Expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent implements OnInit {
  public isActive = false;

  constructor(
    private backdrop: BackdropService
  ) { }

  public ngOnInit(): void {
    this.backdrop.watch()
      .pipe(filter((isActive: boolean) => isActive === false))
      .subscribe(() => {
        this.isActive = false;
      });
  }

  public activate() {
    this.toggle(true);
  }

  public deactivate() {
    this.toggle(false);
  }

  public toggle(isActive: boolean) {
    this.isActive = isActive;

    if (isActive) {
      this.backdrop.show();
    } else {
      this.backdrop.hide();
    }
  }
}
