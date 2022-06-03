export class SetModel {
  public weight: number;
  public reps: number;
  public isComplete: boolean;

  constructor(data?: any) {
    const defaults = { ...data };

    this.weight = defaults.weight;
    this.reps = defaults.reps;
    this.isComplete = defaults.isComplete;
  }
}
