import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { ExpanderComponent } from 'src/app/shared/components/expander/expander.component';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'WorkoutCard',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutCardComponent {
  @Input() public workout: Workout = new Workout();
  @ViewChild('Expander') public expander?: ExpanderComponent;

  constructor(
    private workoutsService: WorkoutsService
  ) { }

  public async delete(event: MouseEvent) {
    event.stopPropagation();
    await this.workoutsService.delete(this.workout.id);
    await this.workoutsService.get();
    this.expander?.deactivate();
  }

  public viewHistory(event: MouseEvent): void {
    event.stopPropagation();
    console.log('viewHistory!');
    this.expander?.deactivate();
  }
}
