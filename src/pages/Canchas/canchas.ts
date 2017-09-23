import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ligas } from '../ligas/ligas';
/*
  Generated class for the Noseleccion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-canchas',
  templateUrl: 'canchas.html'
})
export class CanchasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Canchas');
  }

	
	
	
	launchLigasPage(){
        this.navCtrl.push(Ligas);
        
    }
}
