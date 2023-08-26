import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IWorkoutDetailState, WorkoutDetailActions } from '@store/workout';
import { BackdropComponent } from 'src/app/shared/components/backdrop/backdrop.component';
import { ExpanderComponent } from 'src/app/shared/components/expander/expander.component';
import { Exercise } from '../../models/exercise.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SetComponent } from '../set/set.component';

@Component({
  selector: 'ExerciseCard',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
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
