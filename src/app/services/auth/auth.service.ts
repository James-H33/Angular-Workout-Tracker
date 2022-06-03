import { Injectable } from "@angular/core";
import { Exception } from "src/app/shared/models/exception";
import { UserCredentials } from "src/app/shared/models/user-credentials.model";
import { IHttpService } from "../http/ihttp.service";
import { IStorageService } from "../storage/istorage.service";
import { IAuthService } from "./iauth.service";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private http: IHttpService,
    private storage: IStorageService
  ) { }

  public async login(credentials: UserCredentials): Promise<any> {
    try {
      const response = await this.http.post('user/login', credentials);

      this.storage.set('access_token', response.userId);

      return response;
    } catch (err: any) {
      const ex = new Exception();
      ex.message = err.message;
      ex.rawError = err;

      throw ex;
    }
  }

  public async logout(): Promise<void> {
    this.storage.remove('access_token');
  }
}
