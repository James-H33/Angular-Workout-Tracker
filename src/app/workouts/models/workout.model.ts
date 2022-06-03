import { Exercise } from "./exercise.model";
import { History } from "./history.model";

export class Workout {
  public id: string;
  public title: string;
  public exercises: Exercise[];
  public history: History[];

  constructor(data?: any) {
    const defaults = {
      exercises: [],
      history: [],
      ...data,
    }

    this.id = defaults.id
    this.title = defaults.title;
    this.exercises = defaults.exercises.map((e: any) => new Exercise(e));
    this.history = defaults.history.map((h: any) => new History(h));
  }
}
