//Mejoras En esta pagina:
//1.- Al terminar un partido actualizar automaticamente la tabla, actualmente tengo que dar clic en resultados por que de ahí se manda a llamar la función que actualiza la tabla.
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { CanchasPage } from '../Canchas/canchas';
import { LoadingController } from 'ionic-angular';

//var objetos=[];
//var arr =[];
var arr =[];
export var d=0;
var i=0;
var e1='no'; var e2='no'; var e3='no'; var e4='no'; var e5='no'; var e6='no'; var e7='no'; var e8='no'; var e9='no'; var e10='no'; var e11='no'; var e12='no';var e13='no';var e14='no';var e15='no';var e16='no';var e17='no';var e18='no';

@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html'
})
export class Partidos {
	


@ViewChild('datePicker') datePicker;
@ViewChild('datePicker2') datePicker2;

  ligaSelec:any 
  user4 : FirebaseListObservable<any>; 
  user3 : FirebaseListObservable<any>; 
  user2: FirebaseListObservable<any>;  
  user1: FirebaseListObservable<any>;
  	constructor(
				 public navCtrl: NavController,
                 private alertCtrl: AlertController,
				 public alertController: AlertController,
				 public database: AngularFireDatabase, public storage: Storage,public loadingCtrl: LoadingController) 
    {
	
		
     d=0;
     i=0; 
    }


	  

	
	
	presentLoadingDefault() {
		  let loading = this.loadingCtrl.create({
			content: 'Actualizando Roll...'
		  });

		  loading.present();

		  setTimeout(() => {
			loading.dismiss();
		  }, 2000);
		}
	//Funciones Genericas//
	getLiga(liga){ 
		var liga=liga;
		this.ligaSelec=liga;
	}
	getTablaConc(tablaConc){ 
		var tablaConc=tablaConc;
		this.user2= this.database.list(tablaConc);
		this.user3=this.database.list(tablaConc, { preserveSnapshot: true,});
	}
	getRollConc(rollConc){ 
		var rollConc=rollConc;
		this.user1= this.database.list(rollConc);
	}
	getResultadosConc(resultadosConc){ 
		var resultadosConc=resultadosConc;
		this.user4= this.database.list(resultadosConc);
	}
	
	obtenerDatos(){
		this.storage.get('tablaConc').then ((tablaConc)=> {
		e1='no'; e2='no'; e3='no';e4='no'; e5='no'; e6='no';e7='no'; e8='no'; e9='no'; e10='no'; e11='no';  e12='no';e13='no'; e14='no'; e15='no'; e16='no';e17='no';e18='no';  
       var objetos=[];
       arr =[];
       d=0;
       i=0; 
       //let objectSubscription =
	   this.user3.subscribe(snapshots => {
		  arr =[];
          d=0; 
	      snapshots.forEach(snapshot => {
              arr[i]=snapshot.val();
			  //console.log(arr[i]); Lo comento pero es el que se está repitiendo constantemente!!!!
		  
     objetos[d]={type: 'radio',label:  arr[i].Equipo, value: arr[i].Equipo};
		  
        
          //console.log (objetos[d]);      // ya tengo los equipos en un arreglo dependiendo del nuemero de equipos, haré manual la inserción de equipos, pero debería de ser variable dentro del alert controller.
          if(d==0)
              {   
               e1= objetos[0]; 
              }
         else if(d==1)
              {   
               e2= objetos[1]; 
              }
          else if(d==2)
              {   
               e3= objetos[2]; 
              }
          else if(d==3)
              {   
               e4= objetos[3]; 
              }
          if(d==4)
              {   
               e5= objetos[4]; 
              }
          if(d==5)
              {   
               e6= objetos[5]; 
              }
          if(d==6)
              {   
               e7= objetos[6]; 
              }
          if(d==7)
              {   
               e8= objetos[7]; 
              }
          if(d==8)
              {   
               e9= objetos[8]; 
              }
          if(d==9)
              {   
               e10= objetos[9]; 
              }
          if(d==10)
              {   
               e11= objetos[10]; 
              }
          if(d==11)
              {   
               e12= objetos[11]; 
              }
	      if(d==12)
              {   
               e13= objetos[12]; 
              }
		 if(d==13)
              {   
               e14= objetos[13]; 
              }
		   if(d==14)
              {   
               e15= objetos[14]; 
              }
		 if(d==15)
              {   
               e16= objetos[15]; 
              }
			 if(d==16)
              {   
               e17= objetos[16]; 
              }
		    if(d==17)
              {   
               e18= objetos[17]; 
              }
           d=d+1;
         i=i+1;
    });

   
  })
			
			
		});
	   
		
	}


	ionViewWillEnter() { 
		this.presentLoadingDefault();
	  this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});
		
		this.storage.get('tablaConc').then ((tablaConc)=> {
		this.getTablaConc(tablaConc); 
		});
		
		this.storage.get('rollConc').then ((rollConc)=> {
		this.getRollConc(rollConc);
		});
		
		this.storage.get('resultadosConc').then ((resultadosConc)=> {
		this.getResultadosConc(resultadosConc)
		});
		
		this.obtenerDatos(); //Esta es la funcion
  }
   
   
    
     
    
    launchLigasPage(){
        this.navCtrl.push(CanchasPage);
        
    }
    }
