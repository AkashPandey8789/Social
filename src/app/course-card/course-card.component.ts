import { Component, Input, OnInit, Output ,EventEmitter, ContentChild, AfterViewInit, ContentChildren, AfterContentInit} from '@angular/core';
import { ContentcompComponent } from '../contentcomp/contentcomp.component';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit {

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

  @ContentChildren(ContentcompComponent)
  contentCompQuery:any;
  ngAfterViewInit(): void {
    console.log(this.moreDescriptionPara);
    console.log('COntent comp',this.contentComp);
  }

  ngAfterContentInit(): void {        /*this is the method where we can get the projected component earliest. */
    console.log('content projected',this.contentCompQuery);
  }
}
