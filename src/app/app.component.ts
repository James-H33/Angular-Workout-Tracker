import { Component } from '@angular/core';
import { AppState } from './services/app-state/app-state.model';
import { AppStateService } from './services/app-state/app-state.service';
import { BackdropService } from './services/backdrop/backdrop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isBackdropActive = false;
  public state?: AppState;

  constructor(
    private appState: AppStateService,
    private backdropService: BackdropService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.appState.state$.subscribe((state) => {
      this.state = state;
    });

    await this.appState.load();

    this.backdropService.watch().subscribe((isActive) => {
      this.isBackdropActive = isActive;
    });
  }

  public deactivate() {
    this.backdropService.hide();
  }
}

