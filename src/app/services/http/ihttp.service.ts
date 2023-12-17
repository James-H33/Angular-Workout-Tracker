export abstract class IHttpService {
  public abstract get<T>(path: string, opts?: any): Promise<T>;
  public abstract post<T>(path: string, data: any): Promise<T>;
  public abstract put<T>(path: string, data: any): Promise<T>;
  public abstract delete<T>(path: string): Promise<T>;
}
