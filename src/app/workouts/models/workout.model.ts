import { Exercise } from "./exercise.model";
import { History } from "./history.model";

export function getRecentDate(w: Workout) {
  const createDateValue = new Date(w.createdDate).valueOf();
  const lastCompletedDateValue = new Date(w.lastCompletedDate).valueOf();

  return lastCompletedDateValue > createDateValue ? lastCompletedDateValue : createDateValue;
}

export class Workout {
  public id: string;
  public title: string;
  public exercises: Exercise[];
  public history: History[];
  public startedDate: string;
  public createdDate: string;
  public lastCompletedDate: string;

  constructor(data?: any) {
    const defaults = {
      exercises: [],
      history: [],
      createdDate: '',
      startedDate: '',
      lastCompletedDate: '',
      ...data
    }

    this.id = defaults.id
    this.title = defaults.title;
    this.exercises = defaults.exercises.map((e: any) => new Exercise(e));
    this.history = defaults.history.map((h: any) => new History(h));
    this.startedDate = defaults.startedDate;
    this.createdDate = getDateOrDefault(defaults.createdDate);
    this.lastCompletedDate = getDateOrDefault(defaults.lastCompletedDate);
  }
}

function getDateOrDefault(d: string) {
  return d ? new Date(d).toUTCString() : new Date().toUTCString();
}
