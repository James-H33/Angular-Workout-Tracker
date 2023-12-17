import { createSelector } from '@ngrx/store';
import { Workout, getRecentDate } from '../../models/workout.model';
import { WorkoutsFeature } from './workouts.reducer';

export const {
  selectWorkouts,
  selectIsLoading: selectWorkoutsIsLoading
} = WorkoutsFeature

export const selectSortedByMostRecentDate = createSelector(
  selectWorkouts,
  (workouts) => {
    return sortWorkouts([...workouts]);
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
