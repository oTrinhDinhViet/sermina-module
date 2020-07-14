import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';



@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
