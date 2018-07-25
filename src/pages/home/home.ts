import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListProvider } from '../../providers/list/list';
import { NewlistPage } from '../newlist/newlist';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  myLists //Holds the lists with their name, created date, number of tasks, and quick description

  constructor(public navCtrl: NavController,
              private _listService: ListProvider,
              private _modalCtrl: ModalController) {

  }

  ngOnInit(){
    this.getMyLists()
  }

  newList(){
    //Triggers modal from NewListPage with prompts for a new list
    const modal = this._modalCtrl.create (NewlistPage)
    modal.present()
    
  }

  getMyLists(){
    //Get saves list names and put them in the myLists var
    this.myLists = this._listService.getListNames()
  }

}
