import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorkoutActions, workoutsSelector } from '@store/workouts';
import { IWorkoutState } from '@store/workouts/workouts.reducer';
import { makeGuid } from 'src/app/shared/utils/utils';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {
  public workouts$ = this.store.select(workoutsSelector);
  public isActive = false;
  public newWorkoutTitle = '';

  constructor(
    private workoutsService: WorkoutsService,
    private store: Store<IWorkoutState>
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
    const w = new Workout();
    w.title = this.newWorkoutTitle;
    w.id = makeGuid();

    await this.workoutsService.addWorkout(w);

    this.closeModal();
  }
}
