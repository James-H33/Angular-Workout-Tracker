import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WorkoutStateKeys } from "@store/workout-state-keys.enum";
import { IWorkoutDetailState } from "./workout.reducer";

export const selectWorkoutState = createFeatureSelector<IWorkoutDetailState>(WorkoutStateKeys.WorkoutDetail);

export const selectCurrentWorkout = createSelector(
  selectWorkoutState,
  (state) => state.workout
)
