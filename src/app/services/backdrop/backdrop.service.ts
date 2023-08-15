import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BackdropService {
  public queue = new Subject<boolean>();

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
