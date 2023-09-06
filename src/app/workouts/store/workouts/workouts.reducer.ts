import { createReducer, on } from "@ngrx/store";
import { Workout } from "../../models/workout.model";
import { WorkoutActions } from ".";

export interface IWorkoutState {
  workouts: Workout[];
}

const initialState: IWorkoutState = {
  workouts: []
}

export const workoutsReducer = createReducer<IWorkoutState>(
  initialState,

  on(WorkoutActions.LoadWorkoutsSuccess, (state, { workouts }) => {
    return {
      ...state,
      workouts
    }
  }),

  on(WorkoutActions.CreateWorkoutSuccess, (state, { workouts }) => {
    return {
      ...state,
      workouts
    }
  }),

  on(WorkoutActions.DeleteWorkoutSuccess, (state, { workouts }) => {
    return {
      ...state,
      workouts
    }
  })
)
