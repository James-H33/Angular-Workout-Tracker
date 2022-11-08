import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { BackdropComponent } from 'src/app/shared/components/backdrop/backdrop.component';
import { ExpanderComponent } from 'src/app/shared/components/expander/expander.component';
import { Exercise } from '../../models/exercise.model';
import { WorkoutDetailState } from '../../pages/workout-detail/workout-detail-state.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SetComponent } from '../set/set.component';

@Component({
  selector: 'ExerciseCard',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  standalone: true,
  imports: [
    CheckboxComponent,
    ExpanderComponent,
    SetComponent,
    BackdropComponent
  ]
})
export class ExerciseCardComponent {
  @Input() public exercise = new Exercise();
  @Input() public exerciseIndex = 0;
  @ViewChild('Expander') public expanderRef?: ExpanderComponent;

  constructor(
    private state: WorkoutDetailState
  ) {}

  public remove() {
    this.state.removeExercise(this.exerciseIndex);
  }

  public addSet() {
    this.state.addSet(this.exerciseIndex);
  }
}
