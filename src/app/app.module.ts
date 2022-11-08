import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsLoggedInGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ServicesModule } from './services/services.module';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    AppRoutingModule,
    NavComponent,
    LoginComponent
  ],
  providers: [
    IsLoggedInGuard,
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    },
    {
      provide: 'Window',
      useFactory: () => window || {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
