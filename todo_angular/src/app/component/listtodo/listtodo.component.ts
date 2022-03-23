import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {

  todos=[
    new Todo(1,"Description 1",false, new Date()),
    new Todo(2,"Description 2",false, new Date()),
    new Todo(3,"Description 3",false, new Date()),
    new Todo(4,"Description 4",false, new Date()),
  ]
   

  constructor() { }

  ngOnInit(): void {
  }

}

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){
    
  }
}