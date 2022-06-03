import { UserCredentials } from "src/app/shared/models/user-credentials.model";

export abstract class IAuthService {
  public abstract login(c: UserCredentials): Promise<void>;
  public abstract logout(): Promise<void>;
}
