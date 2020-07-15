import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {StudentRouting} from "./student.routing";
import {StudentService} from "./student.service";



@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
