import { Component, Input, OnInit, Output ,EventEmitter, ContentChild, AfterViewInit} from '@angular/core';
import { ContentcompComponent } from '../contentcomp/contentcomp.component';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit {

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


  @ContentChild('moreDes')  /*it is used to ref content child only */
  moreDescriptionPara:any;

  @ContentChild(ContentcompComponent)
  contentComp:ContentcompComponent|undefined;

  ngAfterViewInit(): void {
    console.log(this.moreDescriptionPara);
    console.log('COntent comp',this.contentComp);
  }
}
