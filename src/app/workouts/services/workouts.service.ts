import { Injectable } from "@angular/core";
import { IHttpService } from "src/app/services/http/ihttp.service";
import { Workout } from "../models/workout.model";

@Injectable({ providedIn: 'root' })
export class WorkoutsService {
  constructor(
    private http: IHttpService
  ) { }

  public async get() {
    const response = await this.http.get('workouts');
    const workouts = response.workouts.map((w: any) => new Workout(w))
    return workouts;
  }

  public async getById(id: string): Promise<Workout | any> {
    const response = await this.http.get(`workouts/${id}`);
    const workout = new Workout(response);

    return workout;
  }

  public async addWorkout(w: Workout) {
    return this.http.post('workouts', w);
  }

  public async update(w: Workout): Promise<any> {
    return this.http.put(`workouts/${w.id}`, w)
      .then((w: Workout) => {
        return new Workout(w);
      })
  }

  public async delete(id: string): Promise<any> {
    return this.http.delete(`workouts/${id}`);
  }
}
