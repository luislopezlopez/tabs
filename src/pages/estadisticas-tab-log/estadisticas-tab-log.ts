import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstadisticasLogPage } from '../estadisticas-log/estadisticas-log';
import { Storage } from '@ionic/storage';
import { ResultadosLogPage } from '../resultados-log/resultados-log';
import { CanchasLogPage } from '../canchas-log/canchas-log';
import { ofensivaPage } from '../ofensiva/ofensiva';
import { defensivaPage } from '../defensiva/defensiva';
/*
  Generated class for the Estadisticastab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-estadisticas-tab-log',
  templateUrl: 'estadisticas-tab-log.html',
})
export class EstadisticasTabLogPage {

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
        this.navCtrl.push(EstadisticasLogPage);
        
    }
    launchLigasPage(){
        this.navCtrl.push(CanchasLogPage);
        
    }
     openResultados(){
        this.navCtrl.push(ResultadosLogPage);
        
    }
	mejorOfensiva(){
        this.navCtrl.push(ofensivaPage);
        
    }
	mejorDefensiva(){
        this.navCtrl.push(defensivaPage);
        
    }
    

}
