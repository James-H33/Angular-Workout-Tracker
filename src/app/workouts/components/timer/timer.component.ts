import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { cast } from 'src/app/shared/functions';
import { convertTimeFromDates, formatTimeFromSeconds } from 'src/app/shared/utils/utils';

@Component({
  selector: 'Timer',
  templateUrl: './timer.component.html',
  standalone: true
})
export class TimerComponent implements OnDestroy {
  @Output()
  public timeChanged = new EventEmitter<number>();

  @Input()
  public get active() {
    return this._isActive
  }

  public set active(isActive: boolean) {
    this._isActive = isActive;

    if (this._isActive) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  @Input()
  public get startDate() {
    return this._startDate;
  }

  public set startDate(date: string) {
    if (date) {
      this._startDate = date;
      this.startTimer();
    } else {
      this._startDate = '';
      this.resetTimer();
    }
  }

  public get formattedTime() {
    return formatTimeFromSeconds(this._time);
  }

  private _time = 0;
  private _startTime = 0;
  private _startDate = '';
  private _isActive = false;
  private _interval?: ReturnType<typeof setInterval> | null;

  public ngOnDestroy(): void {
    this.stopTimer();
  }

  private startTimer() {
    this._startTime = this.getStartTime();

    this._interval = setInterval(() => {
      this._time = convertTimeFromDates(this._startTime);
      this.timeChanged.emit(this._time);
    }, 200);
  }

  private stopTimer() {
    clearInterval(cast<number>(this._interval));
  }

  private resetTimer() {
    this._time = 0;
    this._startTime = 0;
    this.stopTimer();
  }

  private getStartTime() {
    if (this._startDate) {
      return new Date(this._startDate).valueOf();
    }

    return new Date().valueOf();
  }
}

