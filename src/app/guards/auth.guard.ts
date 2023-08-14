import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { first } from "rxjs/operators";
import { AppStateService } from "../services/app-state/app-state.service";

@Injectable()
export class IsLoggedInGuard  {
  constructor(
    private appState: AppStateService,
    private router: Router
  ) { }

  public async canActivate() {
    const state = await this.appState.state$.pipe(first()).toPromise();

    if (state.isLoggedIn) {
      return true;
    }

    this.router.navigateByUrl('login');

    return false;
  }
}
