import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CanchasPage } from '../Canchas/canchas';
import { NavController, AlertController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
}) 
export class AboutPage {
  arrAnuncios:any;
  ligaSelec:any
   promoDB: FirebaseListObservable<any>;
  constructor(private launchNavigator: LaunchNavigator,
			   public navCtrl: NavController, public storage: Storage,public database: AngularFireDatabase,
			   private alertCtrl: AlertController,
			   public alertController: AlertController,) { 
	  
	  
	  this.promoDB= this.database.list('PromoCantera');// Quite esto : .valueChanges().subscribe
  }
  
	
	
	
	
	
	
	
	
	
  ubicacion(){
   this.launchNavigator.navigate("19.027410, -98.255220");
  }
	
	
	
		

	
	
	
	
	
	
	
	

	getLiga(liga){ 
		var liga=liga;
		console.log("mi liga ahora si es "+liga);
		this.ligaSelec=liga;
	}
	
	ionViewDidEnter(){
		this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});

	}
	launchLigasPage(){
        this.navCtrl.push(CanchasPage);
        
    }
	
	

	
	
}
