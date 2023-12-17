import { createAction, props } from '@ngrx/store';
import { Workout } from '../../models/workout.model';

export const Enter = createAction(
  '[Workouts] Enter'
)

export const LoadWorkouts = createAction(
  '[Workouts] Load Workouts'
)

export const LoadWorkoutsSuccess = createAction(
  '[Workouts] Load Workouts Success',
  props<{ workouts: Workout[] }>()
)

export const CreateWorkout = createAction(
  '[Workouts] Create Workout',
  props<{ title: string }>()
);

export const CreateWorkoutSuccess = createAction(
  '[Workouts] Create Workout Success',
  props<{ workouts: Workout[] }>()
);

export const DeleteWorkout = createAction(
  '[Workouts] Delete Workout',
  props<{ id: string }>()
)

export const DeleteWorkoutSuccess = createAction(
  '[Workouts] Delete Workout Success',
  props<{ workouts: Workout[] }>()
);
