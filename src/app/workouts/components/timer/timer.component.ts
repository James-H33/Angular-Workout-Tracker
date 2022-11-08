import { Component } from '@angular/core';
import { convertTimeFromDates, formatTimeFromSeconds } from 'src/app/shared/utils/utils';

@Component({
  selector: 'Timer',
  templateUrl: './timer.component.html',
  standalone: true
})
export class TimerComponent {

  public get formattedTime() {
    return formatTimeFromSeconds(this._time);
  }

  private _time: number = 0;
  private _startTime: number = 0;
  private _interval: any;

  public ngOnInit(): void {
    this._startTime = new Date().valueOf();

    this._interval = setInterval(() => {
      this._time = convertTimeFromDates(this._startTime);
    }, 200);
  }

  public ngOnDestroy(): void {
    clearInterval(this._interval);
  }
}

