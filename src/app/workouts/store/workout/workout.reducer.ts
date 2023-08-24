import { createReducer, on } from "@ngrx/store";
import { WorkoutDetailActions } from "@store/workout";
import { Exercise } from "../../models/exercise.model";
import { SetModel } from "../../models/set.model";
import { Workout } from "../../models/workout.model";

export interface IWorkoutDetailState {
  workout: Workout | null;
  isLoading: boolean;
}

const initialState: IWorkoutDetailState = {
  workout: null,
  isLoading: false
}

export const workoutDetailReducer = createReducer<IWorkoutDetailState>(
  initialState,

  on(WorkoutDetailActions.LoadWorkoutSuccess, (state, { workout }) => {
    return {
      ...state,
      workout,
      isLoading: false
    }
  }),

  on(WorkoutDetailActions.AddExercise, (state, { title }) => {
    const workout = state.workout as Workout;
    const newExercise = new Exercise({ title });
    newExercise.sets = [ new SetModel() ];
    const exercises = [...workout.exercises, newExercise];

    return {
      ...state,
      workout: { ...workout, exercises }
    }
  }),

  on(WorkoutDetailActions.RemoveExercise, (state, { exerciseIndex }) => {
    const workout = state.workout as Workout;
    const updatedExercises = workout.exercises.filter((e, i) => i !== exerciseIndex);

    return {
      ...state,
      workout: { ...workout, exercises: updatedExercises }
    }
  }),

  on(WorkoutDetailActions.RemoveSet, (state, { exerciseIndex, setIndex }) => {
    const workout = state.workout as Workout;
    const exercise = workout.exercises[exerciseIndex];
    const updatedSets = exercise.sets.filter((s, i) => i !== setIndex);
    const updatedExercise = { ...exercise, sets: updatedSets };
    const updatedExercises = replaceExerciseAtIndex(workout.exercises, exerciseIndex, updatedExercise);

    return {
      ...state,
      workout: { ...workout, exercises: updatedExercises }
    }
  }),

  on(WorkoutDetailActions.UpdateSet, (state, { exerciseIndex, setIndex, set }) => {
    const workout = state.workout as Workout;
    const exercise = workout.exercises[exerciseIndex];
    const sets = replaceSetAtIndex(exercise.sets, setIndex, set);
    const updatedExercise = { ...exercise, sets };
    const exercises = replaceExerciseAtIndex(workout.exercises, exerciseIndex, updatedExercise);

    return {
      ...state,
      workout: { ...workout, exercises }
    }
  }),

  on(WorkoutDetailActions.StartWorkout, (state) => {
    const workout = state.workout as Workout;
    const startedDate = new Date().toISOString();

    debugger;

    return {
      ...state,
      workout: { ...workout, startedDate }
    }
  }),

  on(WorkoutDetailActions.FinishWorkoutSuccess, (state) => {
    const workout = state.workout as Workout;
    const startedDate = '';

    return {
      ...state,
      workout: { ...workout, startedDate }
    }
  }),

  on(WorkoutDetailActions.CancelWorkout, (state) => {
    const workout = state.workout as Workout;
    const startedDate = '';

    return {
      ...state,
      workout: { ...workout, startedDate }
    }
  }),

  on(WorkoutDetailActions.AddSet, (state, { exerciseIndex }) => {
    const workout = state.workout as Workout;
    const newSet = new SetModel();
    const exercise = workout.exercises[exerciseIndex];
    const lastSet = exercise.sets[exercise.sets.length - 1];

    if (lastSet) {
      newSet.reps = lastSet.reps;
      newSet.weight = lastSet.weight;
    }

    const sets = [ ...exercise.sets, newSet ];
    const newExercise = { ...exercise, sets };
    const updatedExercises = replaceExerciseAtIndex(workout.exercises, exerciseIndex, newExercise);

    return {
      ...state,
      workout: { ...workout, exercises: updatedExercises }
    }
  })
)

function replaceExerciseAtIndex(exercises: Exercise[], exerciseIndex: number, newExercise: Exercise) {
  return exercises.map((e, i) => {
    if (i === exerciseIndex) {
      return newExercise;
    }

    return e;
  });
}

function replaceSetAtIndex(sets: SetModel[], setIndex: number, newSet: SetModel) {
  return sets.map((s, i) => {
    if (i === setIndex) {
      return newSet;
    }

    return s;
  });
}
