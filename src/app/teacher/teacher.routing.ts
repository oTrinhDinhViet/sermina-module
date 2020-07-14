import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {ClassComponent} from "./class/class.component";
import {ClassListComponent} from "./class-list/class-list.component";
import {ClassDetailComponent} from "./class-detail/class-detail.component";


const routes: Routes = [
  {
    path: 'class',
    component: ClassComponent,
  },
  {
    path: 'classes',
    component: ClassListComponent
  },
  {
    path: 'class/:id',
    component: ClassDetailComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRouting { }
