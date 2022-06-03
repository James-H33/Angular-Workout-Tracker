import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IStorageService } from "../storage/istorage.service";
import { AppState } from "./app-state.model";

@Injectable()
export class AppStateService {
  private state: AppState = new AppState();
  public state$ = new BehaviorSubject<AppState>(new AppState());

  constructor(
    private storage: IStorageService
  ) { }

  public async load(): Promise<void> {
    const isLoggedIn = !!this.storage.get('access_token');
    this.updateState({ ...this.state, isLoggedIn });
  }

  public updateState(newState: AppState) {
    this.state = newState;
    this.state$.next(this.state);
  }

  public updateLoggedIn(isLoggedIn: boolean) {
    const state = {...this.state, isLoggedIn};
    this.updateState(state);
  }
}
