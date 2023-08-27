import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkoutStateKeys } from '@store/workout-state-keys.enum';
import { IWorkoutState } from './workouts.reducer';
import { Workout, getRecentDate } from '../../models/workout.model';

export const workoutsStateSelector = createFeatureSelector<IWorkoutState>(WorkoutStateKeys.Workouts);

export const workoutsSelector = createSelector(
  workoutsStateSelector,
  (state) => state.workouts
)

export const selectSortedByMostRecentDate = createSelector(
  workoutsStateSelector,
  (state) => {
    const workouts = [...state.workouts];

    return sortWorkouts(workouts);
  }
)


function sortWorkouts(workouts: Workout[]) {
  workouts.sort((a: Workout, b: Workout) => {
    const aDate = getRecentDate(a);
    const bDate = getRecentDate(b);

    return bDate - aDate;
  });

  return workouts;
}
