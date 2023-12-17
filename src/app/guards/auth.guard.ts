import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { combineLatest, filter, map, tap } from "rxjs";
import { selectAuthStatus, selectIsLoggedIn } from "../store/app.selectors";

@Injectable()
export class IsLoggedInGuard {
  readonly isLoggedIn$ = this.store.select(selectIsLoggedIn);
  readonly authStatus$ = this.store.select(selectAuthStatus);

  constructor(
    private store: Store,
    private router: Router
  ) { }

  public canActivate() {
    return combineLatest([
      this.isLoggedIn$,
      this.authStatus$.pipe(
        filter((status) => status === 'success')
      )
    ])
      .pipe(
        tap(([isLoggedIn]) => {
          if (!isLoggedIn) {
            this.router.navigateByUrl('login');
          }
        })
      )
  }
}
