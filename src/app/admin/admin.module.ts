import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {AdminRouting} from "./admin.routing";



@NgModule({
  declarations: [UsersListComponent, UserDetailComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }
