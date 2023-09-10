import { Injectable } from "@angular/core";
import { IHttpService } from "src/app/services/http/ihttp.service";
import { Workout } from "../models/workout.model";

@Injectable({ providedIn: 'root' })
export class WorkoutsService {
  constructor(
    private http: IHttpService
  ) { }

  public async get() {
    const response = await this.http.get('workouts') as { workouts: Workout[] };
    const workouts = response.workouts.map((w) => new Workout(w))
    return workouts;
  }

  public async getById(id: string): Promise<Workout> {
    const response = await this.http.get(`workouts/${id}`);
    const workout = new Workout(response);

    return workout;
  }

  public async addWorkout(w: Workout) {
    return this.http.post('workouts', w);
  }

  public async update(w: Workout): Promise<Workout> {
    return this.http.put(`workouts/${w.id}`, w)
      .then((w) => {
        return new Workout(w);
      })
  }

  public async delete(id: string): Promise<void> {
    await this.http.delete(`workouts/${id}`);
  }
}
