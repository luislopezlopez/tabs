import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { CanchasPage } from '../Canchas/canchas';
//import { Ligas } from '../ligas/ligas';
import { Storage } from '@ionic/storage'; 
import { CanchasBienvenidaPage } from '../canchas-bienvenida/canchas-bienvenida';


@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html'
})
export class bienvenidaPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {}


  ionViewDidLoad() {
    
  }
	
		canchasBienvenida(){
	this.navCtrl.setRoot(CanchasBienvenidaPage);
		
	}

}
