import { Component, OnInit, ViewChild } from '@angular/core';
import { Coursescard } from '../coursescard';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    for(let i=0;i<this.imageUrls.length;i++){
      this.courseCardList.push(new Coursescard(this.imageUrls[i],this.titleContent[i],this.titleDescription[i]));
    }
   }

  ngOnInit(): void {
  }
  res:boolean=true;
  imageUrls:string[]=['https://angular.io/assets/images/logos/angular/angular.png','https://www.shutterstock.com/image-vector/vector-illustration-icon-python-programming-260nw-1397241389.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07x3HH51N98FvHu89bLTrKzaMUWgBNwOpAEUgyl1vxA&s'];
  titleContent:string[]=['Angular Course','Python Course','Java Course'];
  titleDescription:string[]=['Angular detailed course','Python detailed course','Java detailed course'];
  courseCardList:Coursescard[]=[
  ]
  
  studentObj=[{
    id:1,
    name:'king'
  },
  {
    id:2,
    name:'Chand'
  },
]

oddEvenNumbers:Number[]=[1,2,3,4,5,6,7,8];
myDate=new Date(2000,7,28);
@ViewChild('courseCardRef')  /*ViewChild returns the first match of the child element ,we can also pass template reference variable.*/
courseCard:CourseCardComponent=new CourseCardComponent();

eventCatcher(courseTitle:string){
    console.log('Parent ',courseTitle);
    console.log('Children',this.courseCard);
  }
}
