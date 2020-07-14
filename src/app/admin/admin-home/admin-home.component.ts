import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../teacher/teacher.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    // public teacherService: TeacherService
  ) { }

  ngOnInit(): void {
  }

}
