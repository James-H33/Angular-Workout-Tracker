import { createAction, props } from '@ngrx/store';
import { SetModel } from '../../models/set.model';
import { Workout } from '../../models/workout.model';

export const LoadWorkout = createAction(
  '[Workout] Load Workout',
  props<{ id: string }>()
)

export const LoadWorkoutSuccess = createAction(
  '[Workout] Load Workout Success',
  props<{ workout: Workout }>()
)

export const StartWorkout = createAction(
  '[Workout] Start Workout'
)

export const FinishWorkout = createAction(
  '[Workout] Finish Workout',
  props<{ callback?: () => void }>()
)

export const FinishWorkoutSuccess = createAction(
  '[Workout] Finish Workout',
  props<{ workout: Workout }>()
)

export const CancelWorkout = createAction(
  '[Workout] Cancel Workout'
)

export const AddExercise = createAction(
  '[Workout] Add Exercise',
  props<{ title: string }>()
)

export const UpdateSet = createAction(
  '[Workout] Update Set',
  props<{ exerciseIndex: number, setIndex: number, set: SetModel }>()
)

export const RemoveExercise = createAction(
  '[Workout] Remove Exercise',
  props<{ exerciseIndex: number }>()
)

export const AddSet = createAction(
  '[Workout] Add Set',
  props<{ exerciseIndex: number }>()
)

export const RemoveSet = createAction(
  '[Workout] Remove Set',
  props<{ exerciseIndex: number, setIndex: number }>()
)

export const Exit = createAction(
  '[Workout] Exit'
)
