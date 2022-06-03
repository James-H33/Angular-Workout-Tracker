export class Exception {
  public code: string;
  public message: string;
  public rawError: any;

  constructor(data?: any) {
    const defaults = {
      code: '',
      message: '',
      rawError: null
    };

    this.code = defaults.code;
    this.message = defaults.message;
    this.rawError = defaults.rawError;
  }
}
