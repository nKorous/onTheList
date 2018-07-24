import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

/*
  Service to interact with storing and getting lists from storage.
*/
@Injectable()
export class ListProvider {

  constructor(public http: HttpClient, 
              private _storage: Storage) {  }

  getListNames(){
    //Gets the names of the active lists currently stored
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
