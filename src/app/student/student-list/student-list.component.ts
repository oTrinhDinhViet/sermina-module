import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin/admin.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(
    // public adminService: AdminService
  ) { }

  ngOnInit(): void {
  }

}
