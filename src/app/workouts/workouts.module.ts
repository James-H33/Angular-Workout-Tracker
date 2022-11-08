import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    WorkoutsRoutingModule
  ],
  declarations: [
    WorkoutsComponent
  ]
})
export class WorkoutsModule {}
