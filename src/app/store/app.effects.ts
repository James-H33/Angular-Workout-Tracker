import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, defer, from, of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";
import { IStorageService } from "../services/storage/istorage.service";
import { UserService } from "../services/user/user.service";
import * as AppStateActions from './app.actions';
import { selectToken } from "./app.selectors";

@Injectable()
export class AppStateEffects {

  readonly userId$: Observable<string> = this.store.select(selectToken);

  checkForAuthenitcation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.CheckForAuth),
      switchMap(() => {
        const token = this.storage.get('access_token');

        return of(AppStateActions.CheckForAuthSuccess({ token }))
      })
    )
  )

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.Login),
      switchMap((payload) => {
        const request$ = defer(() => from(this.authService.login({
          username: payload.username,
          password: payload.password
        })));

        return request$
          .pipe(
            map(({ token }) => {
              localStorage.setItem('access_token', token)
              return AppStateActions.LoginSuccess({ token });
            }),
            tap(() => payload.cb())
          )
      })
    )
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.Logout),
      switchMap((payload) => {
        this.authService.logout();

        payload.cb();

        return of(AppStateActions.LogoutSuccess());
      })
    )
  )

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AppStateActions.LoadUser,
        AppStateActions.CheckForAuthSuccess
      ),
      concatLatestFrom(() => this.userId$),
      switchMap(([action, userId]) => {
        const request$ = defer(() => from(this.userService.getUser(userId)));

        return request$
          .pipe(
            map((user) => {
              return AppStateActions.LoadUserSuccess({ user });
            })
          )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private store: Store,
    private storage: IStorageService,
    private userService: UserService,
    private authService: AuthService
  ) { }
}
