import { SetModel } from './set.model';

export class Exercise {
  public title: string;
  public sets: any[];

  constructor(data?: any) {
    const defaults = {
      title: '',
      sets: [],
      ...data
    }

    this.title = defaults.title;
    this.sets = defaults.sets.map((s: any) => new SetModel(s));
  }
}
