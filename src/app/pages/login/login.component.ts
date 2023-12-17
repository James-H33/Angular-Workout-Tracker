import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { cast } from 'src/app/shared/functions/utils.functions';
import { UserCredentials } from 'src/app/shared/models/user-credentials.model';
import * as AppStateActions from '../../store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LoginComponent {
  public isLoading = false;
  public form = new UserCredentials();
  public errors: Record<string, string> = {};

  constructor(
    private store: Store,
    private router: Router
  ) { }

  public async submit() {
    this.errors = {};

    if (!this.form.isValid()) {
      this.populateLocalValidationErrors();
      return;
    }

    this.store.dispatch(AppStateActions.Login({
      ...this.form,
      cb: () => this.router.navigate([''])
    }));
  }

  private populateLocalValidationErrors() {
    const keys = Object.keys(this.form);
    const form = cast<Record<string, string>>(this.form);

    for (const key of keys) {
      const value = form[key];

      if (!value) {
        this.errors[key] = 'Field is required.';
      }
    }
  }
}
