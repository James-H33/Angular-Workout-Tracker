import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { IAuthService } from 'src/app/services/auth/iauth.service';
import { Exception } from 'src/app/shared/models/exception';
import { UserCredentials } from 'src/app/shared/models/user-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public form = new UserCredentials();
  public errors: any = {};
  public errorMessages: any = [];

  constructor(
    private authService: IAuthService,
    private appState: AppStateService,
    private router: Router
  ) { }

  public ngOnInit() {

  }

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
      this.router.navigate(['/workouts']);
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
    const form: any = this.form;

    for (let key of keys) {
      const value = form[key];

      if (!value) {
        this.errors[key] = 'Field is required.';
      }
    }
  }
}
