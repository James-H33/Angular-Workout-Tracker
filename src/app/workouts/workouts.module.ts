import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutDetailComponent } from './pages/workout-detail/workout-detail.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { SetComponent } from './components/set/set.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WorkoutsRoutingModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutCardComponent,
    WorkoutDetailComponent,
    ExerciseCardComponent,
    SetComponent
  ]
})
export class WorkoutsModule {}
