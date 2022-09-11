import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';
import { WorkoutDetailState } from './workout-detail-state.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss'],
  providers: [WorkoutDetailState]
})
export class WorkoutDetailComponent {
  @Input() public workout: Workout = new Workout();
  public isChoosingExercise = false;

  constructor(
    private router: ActivatedRoute,
    private workoutService: WorkoutsService,
    private state: WorkoutDetailState,
    private routing: Router
  ) { }

  public ngOnInit(): void {
    this.state.watch().subscribe((w: any) => this.workout = w);

    this.router.paramMap.subscribe(map => {
      const id = map.get('id');

      if (id) {
        this.getWorkout(id);
      }
    });
  }

  public async complete() {
    await this.workoutService.update(this.workout);
    this.routing.navigate(['']);
  }

  public async cancel() {
    await this.workoutService.update(this.workout);
    this.routing.navigate(['']);
  }

  public addExercise(exercise: any) {
    this.state.addExercise(exercise.title);
  }

  public openExercisePicker() {
    this.isChoosingExercise = true;
  }

  public async getWorkout(id: string) {
    const workout = await this.workoutService.getById(id);
    this.state.set(workout);
  }
}
