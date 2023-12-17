import { createAction, props } from "@ngrx/store"

export const CheckForAuth = createAction(
  '[AppState] Check For Auth'
)

export const CheckForAuthSuccess = createAction(
  '[AppState] Check For Auth Success',
  props<{ token: string }>()
)

export const CheckForAuthFailure = createAction(
  '[AppState] Check For Auth Failure'
)

export const Login = createAction(
  '[AppState] Login',
  props<{ username: string, password: string, cb: () => void }>()
)

export const LoginSuccess = createAction(
  '[AppState] Login Success',
  props<{ token: string }>()
)

export const LoginFailure = createAction(
  '[AppState] Login Failure',
  props<{ error: any }>()
)

export const Logout = createAction(
  '[AppState] Logout',
  props<{ cb: () => void }>()
)

export const LogoutSuccess = createAction(
  '[AppState] Logout Success'
)

export const LoadUser = createAction(
  '[AppState] Load User'
)

export const LoadUserSuccess = createAction(
  '[AppState] Load User Success',
  props<{ user: any }>()
)
