import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WorkoutDetailComponent } from "./pages/workout-detail/workout-detail.component";
import { WorkoutsComponent } from "./pages/workouts/workouts.component";

const routes = [
  { path: '', component: WorkoutsComponent },
  { path: 'workout/:id', component: WorkoutDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
