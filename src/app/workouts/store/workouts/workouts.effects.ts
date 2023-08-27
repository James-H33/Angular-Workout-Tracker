import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WorkoutActions } from "@store";
import { defer, from } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";
import { makeGuid } from "src/app/shared/utils/utils";
import { Workout } from "../../models/workout.model";
import { WorkoutsService } from "../../services/workouts.service";

@Injectable()
export class WorkoutsEffects {
  constructor(
    private actions$: Actions,
    private workoutsService: WorkoutsService
  ) { }

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

  public createWorkout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(WorkoutActions.CreateWorkout),
        concatMap((action: any) => {
          const w = new Workout({
            title: action.title,
            id: makeGuid()
          });

          const request$ = defer(() => from(this.workoutsService.addWorkout(w)));

          return request$
            .pipe(
              switchMap(() => {
                const request$ = defer(() => from(this.workoutsService.get()));

                return request$.pipe(
                  map((workouts: Workout[]) => {
                    return WorkoutActions.CreateWorkoutSuccess({ workouts });
                  })
                )
              })
            )
        })
      )
  )

  public deleteWorkout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(WorkoutActions.DeleteWorkout),
        mergeMap(({ id }) => {
          const request$ = defer(() => from(this.workoutsService.delete(id)));

          return request$
            .pipe(
              switchMap(() => {
                const request$ = defer(() => from(this.workoutsService.get()));

                return request$.pipe(
                  map((workouts: Workout[]) => {
                    return WorkoutActions.DeleteWorkoutSuccess({ workouts });
                  })
                )
              })
            )
        })
      )
  )
}
