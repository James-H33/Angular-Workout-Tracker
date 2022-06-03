import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {
  public workouts: Workout[] = [];

  constructor(private workoutsService: WorkoutsService) { }

  public async ngOnInit() {
    await this.workoutsService.get();

    this.workoutsService.workouts$
      .subscribe((workouts: Workout[]) => {
        this.workouts = workouts;
      });
  }

  public createWorkout() {
    console.log('Hello World');
    const workout = new Workout();
  }
}
