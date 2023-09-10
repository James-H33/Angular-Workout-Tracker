import { Component, OnInit } from '@angular/core';
import { AppState } from './services/app-state/app-state.model';
import { AppStateService } from './services/app-state/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isBackdropActive = false;
  public state?: AppState;

  constructor(
    private appState: AppStateService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.appState.state$.subscribe((state) => {
      this.state = state;
    });

    await this.appState.load();
  }
}

