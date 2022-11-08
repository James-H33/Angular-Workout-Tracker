import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/app/services/app-state/app-state.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { IAuthService } from 'src/app/services/auth/iauth.service';

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
  public state? = new AppState();

  constructor(
    private appState: AppStateService,
    private auth: IAuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.appState.state$.subscribe((s) => {
      this.state = s;
    });
  }

  public async logout() {
    await this.auth.logout();
    this.appState.updateLoggedIn(false);
    this.router.navigate(['/', 'login']);
  }
}
