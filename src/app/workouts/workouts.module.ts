import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WorkoutDetailEffects, workoutDetailReducer } from '@store/workout';
import { WorkoutStateKeys } from '@store/workout-state-keys.enum';
import { WorkoutsEffects, workoutsReducer } from '@store/workouts';
import { BackdropComponent } from '../shared/components/backdrop/backdrop.component';
import { ExpanderComponent } from '../shared/components/expander/expander.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { WorkoutsRoutingModule } from './workouts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExpanderComponent,
    BackdropComponent,
    ModalComponent,
    WorkoutCardComponent,
    WorkoutsRoutingModule,

    // NGRX Store
    StoreModule.forFeature(WorkoutStateKeys.Workouts, workoutsReducer),
    StoreModule.forFeature(WorkoutStateKeys.WorkoutDetail, workoutDetailReducer),

    // NGRX Effects
    EffectsModule.forFeature([WorkoutsEffects, WorkoutDetailEffects]),
  ],
  declarations: [
    WorkoutsComponent
  ]
})
export class WorkoutsModule {}
