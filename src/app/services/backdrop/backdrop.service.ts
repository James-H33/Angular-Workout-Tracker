import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

(window as any).BackdropServiceCount = 0;

@Injectable()
export class BackdropService {
  public queue = new Subject<boolean>();

  constructor() {
    (window as any).BackdropServiceCount++;
    console.log((window as any).BackdropServiceCount);
  }

  public watch() {
    return this.queue.asObservable();
  }

  public show() {
    this.queue.next(true);
  }

  public hide() {
    this.queue.next(false);
  }
}
