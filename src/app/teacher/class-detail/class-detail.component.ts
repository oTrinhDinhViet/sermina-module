import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student/student.service";

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

}
