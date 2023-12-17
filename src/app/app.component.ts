import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppStateActions from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isBackdropActive = false;

  constructor(
    private store: Store
  ) { }

  public async ngOnInit(): Promise<void> {
    this.store.dispatch(
      AppStateActions.CheckForAuth()
    );
  }
}

