import { Component, Input, ViewChild } from '@angular/core';
import { ExpanderComponent } from 'src/app/shared/components/expander/expander.component';
import { Exercise } from '../../models/exercise.model';
import { WorkoutDetailState } from '../../pages/workout-detail/workout-detail-state.service';

@Component({
  selector: 'ExerciseCard',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent {
  @Input() public exercise = new Exercise();
  @Input() public exerciseIndex = 0;
  @ViewChild('Expander') public expanderRef?: ExpanderComponent;

  constructor(
    private workoutState: WorkoutDetailState
  ) {}

  public remove() {
    console.log(this.exercise);
    this.expanderRef?.deactivate();
  }

  public addSet() {
    console.log(this.exercise);
    this.workoutState.addSet(this.exerciseIndex);
  }
}
