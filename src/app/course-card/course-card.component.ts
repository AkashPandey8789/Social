import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() imageUrl:string="https://angular.io/assets/images/logos/angular/angular.png";
  @Input() titleText:string='Angular Course';
  @Input() titleDescription:string='A detailed walk through for angular ';


}
