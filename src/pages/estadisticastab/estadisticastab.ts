import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Estadisticas } from '../estadisticas/estadisticas';
import { Storage } from '@ionic/storage';
import { ResultadosPage } from '../resultados/resultados';
import { ofensivaPage } from '../ofensiva/ofensiva';
import { defensivaPage } from '../defensiva/defensiva';
import { CanchasPage } from '../Canchas/canchas';
/*
  Generated class for the Estadisticastab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-estadisticastab',
  templateUrl: 'estadisticastab.html'
})
export class EstadisticastabPage {
	 ligaSelec:any 

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
	  this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});
		
  }

	getLiga(liga){ 
		var liga=liga;
		console.log("mi liga ahora si es "+liga);
		this.ligaSelec=liga;
	}
	
	
  ionViewWillEnter() {
	this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});
  }

    
    
    
    
     openEstadisticas(){
        this.navCtrl.push(Estadisticas);
        
    }
    launchLigasPage(){
        this.navCtrl.push(CanchasPage);
        
    }
     openResultados(){
        this.navCtrl.push(ResultadosPage);
        
    }
	mejorOfensiva(){
        this.navCtrl.push(ofensivaPage);
        
    }
	mejorDefensiva(){
        this.navCtrl.push(defensivaPage);
        
    }
    
    
}
