import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/storage.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  private taskList: Object[];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
    this.storageService.saveListToLocal(this.taskList);
  }

}
