import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LigasBienvenidaPage } from '../ligas-bienvenida/ligas-bienvenida';

@Component({
  selector: 'canchas-bienvenida',
  templateUrl: 'canchas-bienvenida.html'
})
export class CanchasBienvenidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Canchas');
  }

	
	
	
	launchLigasPage(){
        this.navCtrl.push(LigasBienvenidaPage);
        
    }
}
