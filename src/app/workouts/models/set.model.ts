export class SetModel {
  public weight: number;
  public reps: number;
  public isComplete: boolean;

  constructor(data?: any) {
    const defaults = {
      weight: 0,
      reps: 0,
      ...data
    };

    this.weight = defaults.weight;
    this.reps = defaults.reps;
    this.isComplete = false;
  }
}
