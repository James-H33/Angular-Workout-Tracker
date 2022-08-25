import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExpanderComponent } from './components/expander/expander.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    ModalComponent,
    ExpanderComponent,
    BackdropComponent
  ],
  exports: [
    NavComponent,
    ModalComponent,
    ExpanderComponent,
    BackdropComponent
  ]
})
export class SharedModule { }
