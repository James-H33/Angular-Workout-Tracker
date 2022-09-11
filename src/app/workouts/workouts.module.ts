import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutDetailComponent } from './pages/workout-detail/workout-detail.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { SetComponent } from './components/set/set.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TimerComponent } from './components/timer/timer.component';
import { ExercisePickerComponent } from './components/exercise-picker/exercise-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    WorkoutsRoutingModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutCardComponent,
    WorkoutDetailComponent,
    ExerciseCardComponent,
    SetComponent,
    CheckboxComponent,
    TimerComponent,
    ExercisePickerComponent
  ]
})
export class WorkoutsModule {}
