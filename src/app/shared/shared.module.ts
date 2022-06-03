import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExpanderComponent } from './components/expander/expander.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    ExpanderComponent
  ],
  exports: [
    NavComponent,
    ExpanderComponent
  ]
})
export class SharedModule { }
