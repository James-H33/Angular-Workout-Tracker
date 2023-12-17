import { Injectable } from "@angular/core";
import { IHttpService } from "../http/ihttp.service";

interface UserResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: IHttpService
  ) { }

  public async getUser(id: string): Promise<{ username: string }> {
    const params = new URLSearchParams({ id });

    const user = await this.http.get<UserResponse>('user?' + params);

    return Promise.resolve({ username: user?.username });
  }
}
