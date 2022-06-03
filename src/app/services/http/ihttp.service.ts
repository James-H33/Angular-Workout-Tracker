export abstract class IHttpService {
  public abstract get(path: string): Promise<any>;
  public abstract post(path: string, data: any): Promise<any>;
  public abstract put(path: string, data: any): Promise<any>;
  public abstract delete(path: string): Promise<any>;
}
