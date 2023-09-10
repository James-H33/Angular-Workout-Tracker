import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { IAuthService } from 'src/app/services/auth/iauth.service';
import { cast } from 'src/app/shared/functions/utils.functions';
import { Exception } from 'src/app/shared/models/exception';
import { UserCredentials } from 'src/app/shared/models/user-credentials.model';

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
  public errorMessages: string[] = [];

  constructor(
    private authService: IAuthService,
    private appState: AppStateService,
    private router: Router
  ) { }

  public async submit() {
    this.errorMessages = [];
    this.errors = {};

    if (!this.form.isValid()) {
      this.populateLocalValidationErrors();
      return;
    }

    try {
      await this.authService.login(this.form);
      this.appState.updateLoggedIn(true);
      this.router.navigate(['']);
    } catch (err) {
      if (err instanceof Exception) {
        this.errorMessages = [err.message];
      } else {
        this.errorMessages = ['Something went wrong.'];
      }
    }
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
