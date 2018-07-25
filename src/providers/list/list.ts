import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

/*
  Service to interact with storing and getting lists from storage.
*/
@Injectable()
export class ListProvider implements OnInit {

  loadedList = []

  constructor(public http: HttpClient, 
              private _storage: Storage) {  }

    ngOnInit(){
    /*** Just putting test data to make sure UI is good. */
    let testTask = {
      listName: 'Test List', 
      listCreatedDate: '2018-07-24 15:48:00', 
      listDescription: 'I put something here just to have something'
    }
      this.loadedList.push(testTask)
      this.loadedList.push(testTask)
    }

  getListNames(){
    //Gets the names of the active lists currently stored
    return this.loadedList
  }

  getListContent(listName:string){
    //Gets the content of the list specified in listName
  }

  getNextID(){
    //returns the next ID for the named list
    let nextNum:number = null
    return nextNum
  }

  createNewList(listName:string, listContent:string){
    //Creates a new list with the name specified in the listName and the listContent as a JSON string
  }

}
