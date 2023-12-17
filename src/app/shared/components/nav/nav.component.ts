import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from 'src/app/store/app.selectors';
import * as AppStateActions from '../../../store/app.actions';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'Navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavComponent {
  readonly isLoggedIn$ = this.store.select(selectIsLoggedIn);

  readonly vm$ = combineLatest({
    isLoggedIn: this.isLoggedIn$
  })

  constructor(
    private store: Store,
    private router: Router
  ) { }

  public async logout() {
    this.store.dispatch(AppStateActions.Logout({
      cb: () => this.router.navigate(['/', 'login'])
    }));
  }
}
