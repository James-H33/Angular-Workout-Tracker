import { Injectable } from "@angular/core";
import { UserCredentials } from "src/app/shared/models/user-credentials.model";
import { IHttpService } from "../http/ihttp.service";
import { IStorageService } from "../storage/istorage.service";
import { IAuthService } from "./iauth.service";

interface AuthenticatedUserDto {
  userId: string;
}


@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private http: IHttpService,
    private storage: IStorageService
  ) { }

  public async login(credentials: UserCredentials): Promise<void> {
    // try {
      const response = await this.http.post('user/login', credentials) as AuthenticatedUserDto;
      const userId = response?.userId;

      this.storage.set('access_token', userId);
    // } catch (err: unknown) {
    //   if (err?.message) {
    //     const ex = new Exception();
    //     ex.message = err?.message;
    //     ex.rawError = err;

    //   }
    // }
  }

  public async logout(): Promise<void> {
    this.storage.remove('access_token');
  }
}
