import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  private taskList: Object[];

  constructor() { }

  ngOnInit() {
    this.taskList = [];
  }

  addTask(task) {
    console.log(task);
    this.taskList.push(task);
  }

}
