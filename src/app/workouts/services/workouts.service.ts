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

    const workouts = response.workouts.map((w: any) => new Workout(w))
    this.sortWorkouts(workouts);
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
    const newWorkout = await this.http.post('workouts', w);
    const workouts = [...this.workouts, newWorkout];
    this.sortWorkouts(workouts);
    this.workouts$.next(workouts);
  }

  public async update(w: Workout): Promise<any> {
    return this.http.put(`workouts/${w.id}`, w);
  }

  public async delete(id: string): Promise<any> {
    return this.http.delete(`workouts/${id}`);
  }

  private sortWorkouts(workouts: Workout[]) {
    workouts.sort((a: Workout, b: Workout) => {
      const aDate = a.getRecentDate();
      const bDate = b.getRecentDate();

      return bDate - aDate;
    });

    return workouts;
  }
}
