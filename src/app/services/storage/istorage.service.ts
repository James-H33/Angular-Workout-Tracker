export abstract class IStorageService {
  public abstract get(key: string): string;
  public abstract set(key: string, value: any): void;
  public abstract remove(key: string): void;
}
