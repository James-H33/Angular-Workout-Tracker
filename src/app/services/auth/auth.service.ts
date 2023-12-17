import { Injectable } from "@angular/core";
import { IHttpService } from "../http/ihttp.service";
import { IStorageService } from "../storage/istorage.service";
import { UserLoginCredentials } from "../../models/user-login-credentials.interface";

interface AuthenticatedUserDto {
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: IHttpService,
    private storage: IStorageService
  ) { }

  async login(credentials: UserLoginCredentials): Promise<{ token: string }> {
    const response = await this.http.post<AuthenticatedUserDto>('user/login', credentials);
    const userId = response?.userId;

    return { token: userId };
  }

  async logout(): Promise<void> {
    this.storage.remove('access_token');
  }
}
