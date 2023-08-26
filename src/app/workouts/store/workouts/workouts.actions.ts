// public async get()
// public async getById(id: string): Promise<Workout | any> {
// public async addWorkout(w: Workout) {
// public async update(w: Workout): Promise<any> {
// public async delete(id: string): Promise<any> {
// private sortWorkouts(workouts: Workout[]) {

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
