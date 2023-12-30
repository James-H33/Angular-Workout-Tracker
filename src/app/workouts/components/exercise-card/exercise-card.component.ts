
import { Component, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IWorkoutDetailState, WorkoutDetailActions } from '@store/workout';
import { Exercise } from '../../models/exercise.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SetComponent } from '../set/set.component';
import { ExpanderComponent } from '../../../shared/components/expander/expander.component';
import { BackdropComponent } from '../../../shared/components/backdrop/backdrop.component';

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
    private store: Store<IWorkoutDetailState>
  ) {}

  public remove() {
    this.store.dispatch(
      WorkoutDetailActions.RemoveExercise({ exerciseIndex: this.exerciseIndex })
    );
  }

  public addSet() {
    this.store.dispatch(
      WorkoutDetailActions.AddSet({ exerciseIndex: this.exerciseIndex })
    );
  }
}
