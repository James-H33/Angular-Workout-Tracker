import { NgModule } from "@angular/core";
import { AppStateService } from "./app-state/app-state.service";
import { AuthService } from "./auth/auth.service";
import { IAuthService } from "./auth/iauth.service";
import { BackdropService } from "./backdrop/backdrop.service";
import { HttpService } from "./http/http.service";
import { IHttpService } from "./http/ihttp.service";
import { IStorageService } from "./storage/istorage.service";
import { StorageService } from "./storage/storage.service";

@NgModule({
  providers: [
    BackdropService,
    AppStateService,
    { provide: 'Document', useFactory: () => document },
    { provide: 'Window', useFactory: () => window },
    { provide: 'LocalStorage', useFactory: () => localStorage },
    { provide: IStorageService, useClass: StorageService },
    { provide: IAuthService, useClass: AuthService },
    { provide: IHttpService, useClass: HttpService }
  ]
})
export class ServicesModule { }
