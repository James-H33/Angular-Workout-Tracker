export abstract class IHttpService {
  public abstract get<T>(path: string): Promise<unknown>;
  public abstract post<T>(path: string, data: T): Promise<unknown>;
  public abstract put<T>(path: string, data: T): Promise<unknown>;
  public abstract delete<T>(path: string): Promise<unknown>;
}
