import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  saveListToLocal (list) {
    window.localStorage.setItem('myLocalList', JSON.stringify(list));
  }

}
