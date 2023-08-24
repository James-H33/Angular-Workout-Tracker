import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkoutStateKeys } from '@store/workout-state-keys.enum';
import { IWorkoutState } from './workouts.reducer';

export const workoutsStateSelector = createFeatureSelector<IWorkoutState>(WorkoutStateKeys.Workouts);

export const workoutsSelector = createSelector(
  workoutsStateSelector,
  (state) => state.workouts
)
