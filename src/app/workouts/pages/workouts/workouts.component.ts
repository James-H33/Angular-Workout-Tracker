import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { WorkoutActions, selectSortedByMostRecentDate } from '@store/workouts';
import { IWorkoutState } from '@store/workouts/workouts.reducer';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {
  public workouts$ = this.store.select(selectSortedByMostRecentDate);
  public isActive = false;
  public newWorkoutTitle = '';

  constructor(
    private store: Store<IWorkoutState>,
    private actions$: Actions
  ) { }

  public async ngOnInit() {
    this.store.dispatch(WorkoutActions.LoadWorkouts());
  }

  public openModal() {
    this.isActive = true;
  }

  public closeModal() {
    this.isActive = false;
    this.newWorkoutTitle = '';
  }

  public async createWorkout() {
    this.actions$.pipe(
        ofType(WorkoutActions.CreateWorkoutSuccess),
        take(1),
      ).subscribe(() => {
        this.closeModal();
      })

    this.store.dispatch(
      WorkoutActions.CreateWorkout({
        title: this.newWorkoutTitle
      })
    );
  }
}
