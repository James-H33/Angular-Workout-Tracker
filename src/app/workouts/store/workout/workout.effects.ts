import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IWorkoutDetailState, WorkoutDetailActions, selectWorkout } from "@store/workout";
import { defer, from } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Workout } from "../../models/workout.model";
import { WorkoutsService } from "../../services/workouts.service";

@Injectable()
export class WorkoutDetailEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IWorkoutDetailState>,
    private workoutsService: WorkoutsService
  ) { }

  public loadWorkout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(WorkoutDetailActions.LoadWorkout),
        switchMap(({ id }) => {
          const request$ = defer(() => from(this.workoutsService.getById(id)));

          return request$
            .pipe(
              map((workout: Workout) => {
                return WorkoutDetailActions.LoadWorkoutSuccess({ workout });
              })
            )
        })
      )
  )

  public finishWorkout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(WorkoutDetailActions.FinishWorkout),
        concatLatestFrom(() => this.store.select(selectWorkout)),
        switchMap((values: any) => {
          const [{ callback }, workout] = values;
          const request$ = defer(() => from(this.workoutsService.update(workout as Workout)));

          return request$
            .pipe(
              tap(() => {
                callback();
              })
            )
        })
      ),
      { dispatch: false }
  )

  public updateWorkout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(
          WorkoutDetailActions.StartWorkout,
          WorkoutDetailActions.CancelWorkout,
          WorkoutDetailActions.AddExercise,
          WorkoutDetailActions.AddSet,
          WorkoutDetailActions.RemoveSet,
          WorkoutDetailActions.UpdateSet,
        ),
        concatLatestFrom(() => this.store.select(selectWorkout)),
        switchMap((values: any) => {
          const [_, workout] = values;
          const request$ = defer(() => from(this.workoutsService.update(workout as Workout)));

          return request$
            .pipe(
              map((workout: Workout) => {
                return WorkoutDetailActions.LoadWorkoutSuccess({ workout });
              })
            )
        })
      )
  )
}
