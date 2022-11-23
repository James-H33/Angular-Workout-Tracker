import { Exercise } from "./exercise.model";
import { History } from "./history.model";

export class Workout {
  public id: string;
  public title: string;
  public exercises: Exercise[];
  public history: History[];
  public createdDate: string;
  public lastCompletedDate: string;

  constructor(data?: any) {
    const defaults = {
      exercises: [],
      history: [],
      createdDate: '',
      lastCompletedDate: '',
      ...data
    }

    this.id = defaults.id
    this.title = defaults.title;
    this.exercises = defaults.exercises.map((e: any) => new Exercise(e));
    this.history = defaults.history.map((h: any) => new History(h));
    this.createdDate = this.getDateOrDefault(defaults.createdDate);
    this.lastCompletedDate = this.getDateOrDefault(defaults.lastCompletedDate);
  }

  public getRecentDate(): number {
    const createDate = new Date(this.createdDate).valueOf();
    const lastCompletedDate = new Date(this.lastCompletedDate).valueOf();

    return lastCompletedDate > createDate ? lastCompletedDate : createDate;
  }

  private getDateOrDefault(d: string) {
    return d ? new Date(d).toUTCString() : new Date().toUTCString();
  }
}
