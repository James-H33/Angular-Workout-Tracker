export class History {
  public date: Date;
  public duration: number;

  constructor(data?: any) {
    const defaults = { ...data };

    this.date = defaults.date;
    this.duration = defaults.duration;
  }
}
