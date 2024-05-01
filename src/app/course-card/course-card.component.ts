import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() 
  imageUrl:string="https://angular.io/assets/images/logos/angular/angular.png";
  @Input() titleText:string='Angular Course';
  @Input() titleDescription:string='A detailed walk through for angular ';
  @Input() cardIndex:Number=0;
  @Output() eventSelector=new EventEmitter();
  cardClicked(title:string|null){
    console.log(title);
    this.eventSelector.emit(title);
  }

}
