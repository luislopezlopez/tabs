import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Resultadosfirebase } from '../../providers/resultadosfirebase'; 
import { LoadingController } from 'ionic-angular';
export var d=0;
var tabla=[];
var tablita=[];
var equipos=0;
@Component({
  selector: 'page-ofensiva',
  templateUrl: 'ofensiva.html'
})
export class ofensivaPage {
	
	doRefresh(refresher) {
    console.log('Actualizar!', refresher);
    setTimeout(() => {this.ionViewDidEnter();refresher.complete();}, 2000);
  }
	
  tablita:any
  ligaSelec:any
  pruebita:any
  user1 : FirebaseListObservable<any>;
  user: FirebaseListObservable<any>;
  	constructor(public loading: LoadingController,
				 public firebaseService: Resultadosfirebase,
				public navCtrl: NavController, public navParams: NavParams,
				public alertController: AlertController,
				private alertCtrl: AlertController,
				public database: AngularFireDatabase, public storage: Storage,public loadingCtrl: LoadingController
				) 
	
	{//Se ejecuta cada que entramos a la página
    this.firebaseService.ionViewWillEnter(); 
	console.log("CONSTRUCTOR");
	tabla=[];
    tablita=[];
  }
	
        getLiga(liga){ //GET LIGA!
		this.ligaSelec=liga;
	    }
		getTablaConc(tablaConc){ 
		var tablaConc=tablaConc;
		this.user= this.database.list(tablaConc, {preserveSnapshot: true,});	

		}
		getResultadosConc(resultadosConc){ 
		var resultadosConc=resultadosConc;
		this.user1= this.database.list(resultadosConc);
		}

	funcion(){
    		setTimeout(() => {this.obtenerDatos();}, 1000);
		}
	presentLoadingDefault() {
		  let loading = this.loadingCtrl.create({
			//spinner: 'default',  
			content: 'Actualizando Tabla...'
		  });

		  loading.present();

		  setTimeout(() => {
			loading.dismiss();
		  }, 3000);
		}
	
	presentLoadingDefault2() {
		  let loading = this.loadingCtrl.create({
			//spinner: 'default',  
			content: 'Actualizando Tabla...'
		  });

		  loading.present();

		  setTimeout(() => {
			loading.dismiss();
		  }, 500);
		}

	
  	 ionViewDidEnter(){ //WILL ENTER
		this.firebaseService.ionViewWillEnter(); 
		this.presentLoadingDefault();

		 this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});

		this.storage.get('resultadosConc').then ((resultadosConc)=> {
		this.getResultadosConc(resultadosConc)
		});
		 
		this.storage.get('tablaConc').then ((tablaConc)=> {
		this.getTablaConc(tablaConc);
		});

		 this.funcion();


	}
	ionViewDidEnter2(){ //sOLO LO USO PARA DESPUES DE CREAR UN DELAY MENOR EN EL ACTUALIZANDO! 
		this.firebaseService.ionViewWillEnter(); 
		this.presentLoadingDefault2();
		 		
		 console.log("Entro aca :)");
		
		 
		 this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});

		this.storage.get('resultadosConc').then ((resultadosConc)=> {
		this.getResultadosConc(resultadosConc)
		});
		 
		this.storage.get('tablaConc').then ((tablaConc)=> {
		this.getTablaConc(tablaConc);
		});

		 this.funcion();


	}

	
	
	obtenerDatos(){
  	     tabla=[];
		 tablita=[];
		this.storage.get('tablaConc').then ((tablaConc)=> {

		this.user1=this.database.list(tablaConc, {
        preserveSnapshot: true,
        });

		let objectSubscription = this.user.subscribe(snapshots => {
          equipos=0;
          snapshots.forEach(snapshot => {
		  tabla[equipos]=snapshot.val(); 
		  equipos=equipos+1;

    });
   
  })
		 
		 
 tabla.sort(function(obj1, obj2) { // SORT TABLA
	
	return obj2.GF - obj1.GF;
});
		
		var i=0;

		for(i=0;i<equipos;i++){
			tablita[i]=tabla[i]

		}
		 this.tablita=tabla;
		objectSubscription.unsubscribe(); 
				console.log("FIIIIIIIIIN");

		
	}

	)}
	
	
	
	
	
	
	
	
	actualizar(){
		console.log("actualizó!!! ")

	}
	

}
