import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IHttpService } from "src/app/services/http/ihttp.service";
import { Workout } from "../models/workout.model";

@Injectable({ providedIn: 'root' })
export class WorkoutsService {
  private workouts: Workout[] = [];
  public workouts$ = new BehaviorSubject(this.workouts);

  constructor(private http: IHttpService) { }

  public async get() {
    const response = await this.http.get('workouts');

    const workouts = response.workouts.map((w: any) => new Workout(w));
    this.workouts = workouts;

    this.workouts$.next(this.workouts);

    return workouts;
  }

  public async getById(id: string): Promise<Workout | any> {
    if (!this.workouts.length) {
      await this.get();
    }

    return this.workouts.find((w: Workout) => w.id === id);
  }

  public async addWorkout(w: Workout) {
    const workouts = this.workouts.push(w);

    const newWorkouts = await this.http.put('workouts', workouts);

    this.workouts$.next(newWorkouts);
  }

  public async update(w: Workout): Promise<any> {
    return this.http.put(`workouts/${w.id}`, w);
  }

  public async delete(id: string): Promise<any> {
    return this.http.delete(`workouts/${id}`);
  }
}
