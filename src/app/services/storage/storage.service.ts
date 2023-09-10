import { Inject, Injectable } from "@angular/core";
import { IStorageService } from "./istorage.service";

@Injectable()
export class StorageService implements IStorageService {
  constructor(
    @Inject('Document') private documentRef: Document,
    @Inject('LocalStorage') private localStorageRef: Storage,
  ) { }

  public get(key: string): string {
    return this.localStorageRef.getItem(key) as string;
  }

  public set(key: string, value: string): void {
    this.localStorageRef.setItem(key, value);
  }

  public remove(key: string): void {
    this.localStorageRef.removeItem(key);
  }
}
