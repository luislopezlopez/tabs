import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LigasLogPage } from '../ligas-log/ligas-log';

@Component({
  selector: 'page-canchas-log',
  templateUrl: 'canchas-log.html',
})
export class CanchasLogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Canchas');
  }

	
	
	
	launchLigasPage(){
        this.navCtrl.push(LigasLogPage);
        
    }
}
