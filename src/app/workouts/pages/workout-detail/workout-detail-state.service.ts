import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Exercise } from "../../models/exercise.model";
import { SetModel } from "../../models/set.model";
import { Workout } from "../../models/workout.model";

@Injectable()
export class WorkoutDetailState {
  public currentState = new Workout();
  public state$ = new BehaviorSubject<Workout>(new Workout());

  public watch() {
    return this.state$.asObservable();
  }

  public set(s: Partial<Workout>) {
    this.currentState = { ...this.currentState, ...s } as Workout;
    this.state$.next(this.currentState);
  }

  public addExercise(title: string) {
    const newExercise = new Exercise({ title });
    newExercise.sets = [ new SetModel() ];
    const exercises = [...this.currentState.exercises, newExercise];
    this.set({ exercises });
  }

  public addSet(exerciseIndex: number) {
    const newSet = new SetModel();
    const state = this.currentState;
    const exercise = state.exercises[exerciseIndex];
    const lastSet = exercise.sets[exercise.sets.length - 1];

    if (lastSet) {
      newSet.reps = lastSet.reps;
      newSet.weight = lastSet.weight;
    }

    const sets = [ ...exercise.sets, newSet ];
    const newExercise = { ...exercise, sets }
    const exercises = this.replaceExerciseAtIndex(exerciseIndex, newExercise);
    this.set({ exercises });
  }

  public updateSet(exerciseIndex: number, setIndex: number, newState: SetModel) {
    const state = this.currentState;
    const exercise = state.exercises[exerciseIndex];
    const sets = exercise.sets.map((s, i) => {
      if (i === setIndex) {
        return newState;
      }

      return s;
    });

    const newExercise = { ...exercise, sets }
    const exercises = this.replaceExerciseAtIndex(exerciseIndex, newExercise);

    this.set({ exercises });
  }

  public deleteSet(exerciseIndex: number, setIndex: number) {
    const state = this.currentState;
    const exercise = state.exercises[exerciseIndex];
    const sets = exercise.sets.filter((s, i) => setIndex !== i);
    const newExercise = { ...exercise, sets };
    const exercises = this.replaceExerciseAtIndex(exerciseIndex, newExercise);

    this.set({ exercises });
  }

  public removeExercise(exerciseIndex: number) {
    const state = this.currentState;
    const exercises = state.exercises.filter((e, i) => exerciseIndex !== i);

    this.set({ exercises });
  }

  private replaceExerciseAtIndex(exerciseIndex: number, newState: Exercise) {
    return this.currentState.exercises.map((e, i) => {
      if (i === exerciseIndex) {
        return newState;
      }

      return e;
    });
  }
}
