import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IWorkoutDetailState, WorkoutDetailActions, selectCurrentWorkout } from "@store/workout";
import { defer, from } from "rxjs";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
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

  // public finishWorkout$ = createEffect(() =>
  //   this.actions$
  //     .pipe(
  //       ofType(WorkoutDetailActions.FinishWorkout),
  //       withLatestFrom(this.store.select(selectCurrentWorkout)),
  //       switchMap((values: any) => {
  //         const [_, workout] = values;
  //         const request$ = defer(() => from(this.workoutsService.update(workout as Workout)));

  //         return request$
  //           .pipe(
  //             map((workout: Workout) => {
  //               return WorkoutDetailActions.FinishWorkoutSuccess({ workout });
  //             })
  //           )
  //       })
  //     )
  // )

  public updateWorkout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(
          // WorkoutDetailActions.StartWorkout,
          WorkoutDetailActions.AddExercise,
          WorkoutDetailActions.AddSet,
          WorkoutDetailActions.RemoveSet,
          WorkoutDetailActions.UpdateSet,
        ),
        withLatestFrom(this.store.select(selectCurrentWorkout)),
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
