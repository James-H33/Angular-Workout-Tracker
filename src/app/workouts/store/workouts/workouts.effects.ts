import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WorkoutActions } from "@store";
import { defer, from, of } from "rxjs";
import { exhaustMap, map, tap } from "rxjs/operators";
import { Workout } from "../../models/workout.model";
import { WorkoutsService } from "../../services/workouts.service";

@Injectable()
export class WorkoutsEffects {
  constructor(
    private actions$: Actions,
    private workoutsService: WorkoutsService
  ) {}

  public loadWorkouts$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(WorkoutActions.LoadWorkouts),
        exhaustMap(() => {
          const request$ = defer(() => from(this.workoutsService.get()));

          return request$
            .pipe(
              map((workouts: Workout[]) => {
                return WorkoutActions.LoadWorkoutsSuccess({ workouts });
              })
            )
        })
      )
  )
}
