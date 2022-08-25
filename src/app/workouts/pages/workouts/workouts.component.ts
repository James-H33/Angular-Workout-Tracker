import { Component, OnInit } from '@angular/core';
import { makeGuid } from 'src/app/shared/utils/utils';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {
  public workouts: Workout[] = [];
  public isActive = false;
  public newWorkoutTitle = '';

  constructor(private workoutsService: WorkoutsService) { }

  public async ngOnInit() {
    await this.workoutsService.get();

    this.workoutsService.workouts$
      .subscribe((workouts: Workout[]) => {
        this.workouts = workouts;
      });
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
