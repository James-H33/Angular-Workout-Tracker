import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Actions, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { IWorkoutState, WorkoutActions } from '@store/index';
import { take } from 'rxjs/operators';
import { BackdropComponent } from 'src/app/shared/components/backdrop/backdrop.component';
import { ExpanderComponent } from 'src/app/shared/components/expander/expander.component';
import { Workout, getRecentDate } from '../../models/workout.model';
import { ExerciseCardComponent } from '../exercise-card/exercise-card.component';


@Component({
  selector: 'WorkoutCard',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ExerciseCardComponent,
    BackdropComponent,
    ExpanderComponent
  ]
})
export class WorkoutCardComponent {
  @Input() public workout: Workout = new Workout();
  @ViewChild('Expander') public expander?: ExpanderComponent;

  public formatDate: (w: Workout) => any = getRecentDate;

  constructor(
    private store: Store<IWorkoutState>,
    private actions$: Actions
  ) { }

  public async delete(event: MouseEvent) {
    event.stopPropagation();

    this.actions$.pipe(
      ofType(WorkoutActions.DeleteWorkoutSuccess),
      take(1),
    ).subscribe(() => {
      this.expander?.deactivate();
    })

    this.store.dispatch(
      WorkoutActions.DeleteWorkout({
        id: this.workout.id
      })
    )
  }

  public viewHistory(event: MouseEvent): void {
    event.stopPropagation();
    this.expander?.deactivate();
  }
}
