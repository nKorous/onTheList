import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  myLists = [] //Holds the lists with their name, created date, number of tasks, and quick description

  constructor(public navCtrl: NavController) {

    /*** Just putting test data to make sure UI is good. */
    let testTask = {
      listName: 'Test List', 
      listCreatedDate: '2018-07-24 15:48:00', 
      listDescription: 'I put something here just to have something'
    }

    this.myLists.push(testTask)
    this.myLists.push(testTask)
    this.myLists.push(testTask)
    this.myLists.push(testTask)
  }

  ngOnInit(){

  }

  newList(){
    //Actions for the new list
    return
  }

  getMyLists(){
    //Get saves list names and put them in the myLists var
    return
  }

}
