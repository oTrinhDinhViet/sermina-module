import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: '',
    component: AdminHomeComponent,
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
export class AdminRouting { }
