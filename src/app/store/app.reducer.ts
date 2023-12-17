import { createFeature, createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app.actions';

export interface MyState {
  isLoggedIn: boolean;
  token: string;
  username: string;
  authStatus: 'idle' | 'pending' | 'success' | 'failure';
  loginStatus: 'idle' | 'pending' | 'success' | 'failure';
}

const initialState: MyState = {
  isLoggedIn: false,
  token: '',
  username: '',
  authStatus: 'idle',
  loginStatus: 'idle'
}

export const AppStateFeature = createFeature({
  name: 'app-state',
  reducer: createReducer<MyState>(initialState,
    on(AppStateActions.CheckForAuth, (state) => {
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        authStatus: 'pending'
      }
    }),

    on(AppStateActions.CheckForAuthSuccess, (state, { token }) => {
      return {
        ...state,
        isLoggedIn: !!token,
        token,
        authStatus: 'success'
      }
    }),

    on(AppStateActions.CheckForAuthFailure, (state) => {
      return {
        ...state,
        token: '',
        isLoggedIn: false,
        authStatus: 'failure'
      }
    }),

    on(AppStateActions.Login, (state) => {
      return {
        ...state,
        loginStatus: 'pending'
      }
    }),

    on(AppStateActions.LoginSuccess, (state, { token }) => {
      return {
        ...state,
        token,
        isLoggedIn: true,
        loginStatus: 'success'
      }
    }),

    on(AppStateActions.LoadUserSuccess, (state, { user }) => {
      return {
        ...state,
        username: user.username
      }
    })
  )
})

export const {
  name: AppStateFeatureName,
  reducer: AppStateReducer,
} = AppStateFeature;
