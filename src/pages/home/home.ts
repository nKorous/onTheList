import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  myLists = [] //Holds the lists with their name, created date, number of tasks, and quick description

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){

  }

  newList(){
    //Actions for the new list
  }

  getMyLists(){
    //Get saves list names and put them in the myLists var
  }

}
