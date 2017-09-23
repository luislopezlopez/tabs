import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CanchasPage } from '../Canchas/canchas';
/*
  Generated class for the Noseleccion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'noseleccion',
  templateUrl: 'noseleccion.html'
})
export class noSeleccionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoseleccionPage');
  }
	
	launchLigasPage(){
        this.navCtrl.push(CanchasPage);
        
    }

}
