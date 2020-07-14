import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';



@NgModule({
  declarations: [ClassComponent, ClassListComponent, ClassDetailComponent],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
