import { Injectable } from "@angular/core";
import { IHttpService } from "./ihttp.service";

@Injectable()
export class HttpService implements IHttpService {
  // public base = 'https://http-nodejs-production-04f9.up.railway.app';
  public base = 'http://localhost:9090';

  public async get(path: string): Promise<any> {
    const response = await fetch(`${this.base}/${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
    });

    const result = await response.json();

    return result;
  }

  public async post(path: string, data: any): Promise<any> {
    const fullPath = `${this.base}/${path}`;
    const response = await fetch(fullPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
      body: JSON.stringify(data)
    });

    if (response.status !== 200) {
      throw await response.json();
    }

    const result = await response.json();

    return result;
  }

  public async put(path: string, data: any): Promise<any> {
    const fullPath = `${this.base}/${path}`;
    const response = await fetch(fullPath, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
  }

  public async delete(path: string): Promise<any> {
    const response = await fetch(`${this.base}/${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
    });

    const result = await response.json();

    return result;
  }

  private getToken() {
    return 'Bearer ' + localStorage.getItem('access_token');
  }
}
