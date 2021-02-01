import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class LayoutModule { }
