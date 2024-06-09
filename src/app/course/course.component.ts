import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  constructor(private http:WebService){}


  expandInfo: string = "large"
  toggleExpansion(expandInfo: string) {
    this.expandInfo = expandInfo
  }

}
