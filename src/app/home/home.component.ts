import { Component, OnInit } from '@angular/core';
import { Coursescard } from '../coursescard';

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
  imageUrls:string[]=['https://angular.io/assets/images/logos/angular/angular.png','https://www.shutterstock.com/image-vector/vector-illustration-icon-python-programming-260nw-1397241389.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07x3HH51N98FvHu89bLTrKzaMUWgBNwOpAEUgyl1vxA&s'];
  titleContent:string[]=['Angular Course','Python Course','Java Course'];
  titleDescription:string[]=['Angular detailed course','Python detailed course','Java detailed course'];
  courseCardList:Coursescard[]=[
  ]
  
}
