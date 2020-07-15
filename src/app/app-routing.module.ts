import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {UsersListComponent} from "./admin/users-list/users-list.component";
import {UserDetailComponent} from "./admin/user-detail/user-detail.component";
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentDetailComponent} from "./student/student-detail/student-detail.component";
import {ClassListComponent} from "./teacher/class-list/class-list.component";
import {ClassDetailComponent} from "./teacher/class-detail/class-detail.component";


const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'admin/users',
    component: UsersListComponent
  },
  {
    path: 'admin/users/1',
    component: UserDetailComponent
  },
  {
    path: 'student/list',
    component: StudentListComponent
  },
  {
    path: 'student/1',
    component: StudentDetailComponent
  },
  {
    path: 'teacher/classes',
    component: ClassListComponent
  },
  {
    path: 'teacher/class/1',
    component: ClassDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
