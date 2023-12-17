import { WorkoutDetailFeature } from "./workout.reducer";

// export const selectWorkoutState = createFeatureSelector<IWorkoutDetailState>(WorkoutStateKeys.WorkoutDetail);

// export const selectCurrentWorkout = createSelector(
//   selectWorkoutState,
//   (state) => state.workout
// )

export const {
  selectWorkout,
  selectIsLoading
} = WorkoutDetailFeature;
