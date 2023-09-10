export abstract class IStorageService {
  public abstract get(key: string): string;
  public abstract set(key: string, value: string): void;
  public abstract remove(key: string): void;
}
