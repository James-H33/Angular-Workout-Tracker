import { createFeature, createReducer, on } from "@ngrx/store";
import { Workout } from "../../models/workout.model";
import * as WorkoutActions from "./workouts.actions";

export interface IWorkoutState {
  isLoading: boolean;
  workouts: Workout[];
}

const initialState: IWorkoutState = {
  isLoading: false,
  workouts: []
}

export const WorkoutsFeature = createFeature({
  name: 'workouts',
  reducer: createReducer<IWorkoutState>(initialState,
    on(WorkoutActions.LoadWorkouts, (state) => {
      return {
        ...state,
        isLoading: true
      }
    }),

    on(WorkoutActions.LoadWorkoutsSuccess, (state, { workouts }) => {
      return {
        ...state,
        workouts,
        isLoading: false
      }
    }),


    on(WorkoutActions.CreateWorkout, (state) => {
      return {
        ...state,
        isLoading: true
      }
    }),

    on(WorkoutActions.CreateWorkoutSuccess, (state, { workouts }) => {
      return {
        ...state,
        workouts,
        isLoading: false
      }
    }),

    on(WorkoutActions.DeleteWorkout, (state) => {
      return {
        ...state,
        isLoading: true
      }
    }),

    on(WorkoutActions.DeleteWorkoutSuccess, (state, { workouts }) => {
      return {
        ...state,
        workouts,
        isLoading: false
      }
    })
  )
})

export const {
  name: WorkoutsFeatureName,
  reducer: WorkoutsReducer,
} = WorkoutsFeature;
