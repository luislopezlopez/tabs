import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Ligas } from '../ligas/ligas';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
var numEquipos=0;
var arrkeys=[];
var arrg =[];
var arrEquipos =[];
var e1='no'; var e2='no'; var e3='no'; var e4='no'; var e5='no'; var e6='no'; var e7='no'; var e8='no'; var e9='no'; var e10='no'; var e11='no'; var e12='no';var e13='no';var e14='no';var e15='no';var e16='no';var e17='no';var e18='no';
var ptse1=0;var ptse2=0;var ptse3=0;var ptse4=0;var ptse5=0;var ptse6=0;var ptse7=0;var ptse8=0;var ptse9=0;var ptse10=0;var ptse11=0;var ptse12=0;var ptse13=0;var ptse14=0;var ptse15=0;var ptse16=0;var ptse17=0;var ptse18=0;
//JJ//
var jj1=0; var jj2=0; var jj3=0; var jj4=0;var jj5=0; var jj6=0; var jj7=0; var jj8=0;var jj9=0; var jj10=0; var jj11=0; var jj12=0;var jj13=0; var jj14=0; var jj15=0; var jj16=0;var jj17=0; var jj18=0;
//JG//
var jg1=0; var jg2=0; var jg3=0; var jg4=0;var jg5=0; var jg6=0; var jg7=0; var jg8=0;var jg9=0; var jg10=0; var jg11=0; var jg12=0;var jg13=0; var jg14=0; var jg15=0; var jg16=0;var jg17=0; var jg18=0;
//JE//
var je1=0; var je2=0; var je3=0; var je4=0;var je5=0; var je6=0; var je7=0; var je8=0;var je9=0; var je10=0; var je11=0; var je12=0;var je13=0; var je14=0; var je15=0; var je16=0;var je17=0; var je18=0;
//JP//
var jp1=0; var jp2=0; var jp3=0; var jp4=0;var jp5=0; var jp6=0; var jp7=0; var jp8=0;var jp9=0; var jp10=0; var jp11=0; var jp12=0;var jp13=0; var jp14=0; var jp15=0; var jp16=0;var jp17=0; var jp18=0;
//GF//
var gf1=0; var gf2=0; var gf3=0; var gf4=0;var gf5=0; var gf6=0; var gf7=0; var gf8=0;var gf9=0; var gf10=0; var gf11=0; var gf12=0;var gf13=0; var gf14=0; var gf15=0; var gf16=0;var gf17=0; var gf18=0;
//GC//
var gc1=0; var gc2=0; var gc3=0; var gc4=0;var gc5=0; var gc6=0; var gc7=0; var gc8=0;var gc9=0; var gc10=0; var gc11=0; var gc12=0;var gc13=0; var gc14=0; var gc15=0; var gc16=0;var gc17=0; var gc18=0;
//DG//
var dg1=0; var dg2=0; var dg3=0; var dg4=0;var dg5=0; var dg6=0; var dg7=0; var dg8=0;var dg9=0; var dg10=0; var dg11=0; var dg12=0;var dg13=0; var dg14=0; var dg15=0; var dg16=0;var dg17=0; var dg18=0;
//KEY//
var key1=undefined; var key2=undefined; var key3=undefined; var key4=undefined; var key5=undefined; var key6=undefined; var key7=undefined; var key8=undefined; var key9=undefined; var key10=undefined; var key11=undefined; var key12=undefined; var key13=undefined; var key14=undefined; var key15=undefined; var key16=undefined; var key17=undefined; var key18=undefined;
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {
	
	
  ligaSelec: any 
  user3 : FirebaseListObservable<any>;
  user1 : FirebaseListObservable<any>;
  user2 : FirebaseListObservable<any>;
  	constructor(public navCtrl: NavController,
				 	public alertController: AlertController,
				      private alertCtrl: AlertController,
				 		public database: AngularFireDatabase, public storage: Storage,public loadingCtrl: LoadingController) {
		
		this.presentLoadingDefault();
        }
	
	getLiga(liga){ 
		var liga=liga;
		this.ligaSelec=liga;
	}
	getTablaConc(tablaConc){ 
		var tablaConc=tablaConc;
		this.user1= this.database.list(tablaConc);
		
	}
	getResultadosConc(resultadosConc){ 
		var resultadosConc=resultadosConc;
		this.user3= this.database.list(resultadosConc)
		this.user2= this.database.list(resultadosConc)
	}
	presentLoadingDefault() {
		  let loading = this.loadingCtrl.create({
			//spinner: 'default',  
			content: 'Actualizando Resultados...'
		  });

		  loading.present();

		  setTimeout(() => {
			loading.dismiss();
		  }, 3000);
		}
	obtenerDatos(){ 
		console.log("VOY A OBTENER DATOS EN RESULTADOS");
		 arrkeys=[];
         var j=0;
         var i=0;
         numEquipos=0;
	     key1=0;key2=0;key3=0;key4=0;key5=0;key6=0;key7=0;key8=0;key9=0;key10=0;key11=0;key12=0;key13=0;key14=0;key15=0;key16=0;key17=0;key18=0;
		
		this.storage.get('tablaConc').then ((tablaConc)=> {	
		this.user1=this.database.list(tablaConc, {
        preserveSnapshot: true,
        });
       
       this.user1.subscribe(snapshots => {
	   arrkeys=[];
          var d=0; 
		  numEquipos=0;
          snapshots.forEach(snapshot => {		
		  var key = snapshot.key;
		  arrkeys[j]=key;
          arrg[j]=snapshot.val(); //arreglo generico
          arrEquipos[j]=arrg[j].Equipo; //Adquirimos los equipos y guardamos en variabless
		        if(j==0){ 
               e1= arrEquipos[0];key1=arrkeys[0];    //{A} KEY FORZADA!!! 
              }
          else if(j==1){   
               e2= arrEquipos[1];key2=arrkeys[1];
              }
          else if(j==2){   
               e3= arrEquipos[2];key3=arrkeys[2];
               }
          else if(j==3){   
               e4= arrEquipos[3]; key4=arrkeys[3];
              }
			  else if(j==4){   
               e5= arrEquipos[4]; key5=arrkeys[4];
              }
			  else if(j==5){   
               e6= arrEquipos[5]; key6=arrkeys[5];
              }
			  else if(j==6){   
               e7= arrEquipos[6]; key7=arrkeys[6];
              }
			  else if(j==7){   
               e8= arrEquipos[7]; key8=arrkeys[7];
              }
			  else if(j==8){   
               e9= arrEquipos[8]; key9=arrkeys[8];
              }
			  else if(j==9){   
               e10= arrEquipos[9]; key10=arrkeys[9];
              }
			  else if(j==10){   
               e11= arrEquipos[10]; key11=arrkeys[10];
              }
			  else if(j==11){   
               e12= arrEquipos[11]; key12=arrkeys[11];
              }
			  else if(j==12){   
               e13= arrEquipos[12]; key13=arrkeys[12];
              }
			  else if(j==13){   
               e14= arrEquipos[13]; key14=arrkeys[13];
              }
			  else if(j==14){   
               e15= arrEquipos[14]; key15=arrkeys[14];
              }
			  else if(j==15){   
               e16= arrEquipos[15]; key16=arrkeys[15];
              }
			  else if(j==16){   
               e17= arrEquipos[16]; key17=arrkeys[16];
              }
			  else if(j==17){   
               e18= arrEquipos[17]; key18=arrkeys[17];
              }
			  
	  
			  
          d=d+1;
          j=j+1;
              
          numEquipos+=1;

		  
    });
   
  })//termina aquí la primer memoriaaaaaaaaa de user1 , seguimos con codigo 	

       this.storage.get('resultadosConc').then ((resultadosConc)=> {
	 console.log("RESULTADOS CONC!!!!"+resultadosConc);
	   var arr =[];
       var arrLocal =[];
       var arrGolLocal =[];
       var arrGolVisita =[];
       var arrVisita =[];
	   
       i=0; 
       
			
       this.user3=this.database.list(resultadosConc, {
        preserveSnapshot: true,
        });
       this.user3.subscribe(snapshots => {
		 if (snapshots.length==0){ //Reiniciamos todo a cero
			 console.log("snapshots ==========0");
						 
			 if (numEquipos==1 ){
				this.user1.update(key1,{PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			  else if (numEquipos==2){
				this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			    this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});   
			  }
			  else if (numEquipos==3){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			  else if (numEquipos==4){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			 else if (numEquipos==5){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			 else if (numEquipos==6){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			 else if (numEquipos==7){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			 else if (numEquipos==8){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			 else if (numEquipos==9){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			 else if (numEquipos==10){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				 this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
			 else if (numEquipos==11){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
			 else if (numEquipos==12){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
			 else if (numEquipos==13){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key13,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
			 else if (numEquipos==14){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key13,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key14,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
			 else if (numEquipos==15){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key13,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key14,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key15,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
			 else if (numEquipos==16){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key13,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key14,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key15,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key16,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 
			  }
			 else if (numEquipos==17){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key13,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key14,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key15,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key16,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key17,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});

			  }
			 else if (numEquipos==18){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key5,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key6,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key7,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key8,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key9,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key10,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key11,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				  this.user1.update(key12,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key13,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key14,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key15,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key16,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key17,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
				 this.user1.update(key18,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});
			  }
		
		 
		//PTS//
		  ptse1=0;ptse2=0; ptse3=0;ptse4=0;ptse5=0;ptse6=0; ptse7=0;ptse8=0; ptse9=0;ptse10=0;ptse11=0;ptse12=0; ptse13=0;ptse14=0;ptse15=0;ptse16=0; ptse17=0;ptse18=0;	 
		//JJ//
		 jj1=0;  jj2=0;  jj3=0;  jj4=0; jj5=0;  jj6=0;  jj7=0;  jj8=0; jj9=0;  jj10=0;  jj11=0;  jj12=0; jj13=0;  jj14=0;  jj15=0;  jj16=0; jj17=0;  jj18=0;
		//JG//
		 jg1=0;  jg2=0;  jg3=0;  jg4=0; jg5=0;  jg6=0;  jg7=0;  jg8=0; jg9=0;  jg10=0;  jg11=0;  jg12=0; jg13=0;  jg14=0;  jg15=0;  jg16=0; jg17=0;  jg18=0;
		//JE//
		 je1=0;  je2=0;  je3=0;  je4=0; je5=0;  je6=0;  je7=0;  je8=0; je9=0;  je10=0;  je11=0;  je12=0; je13=0;  je14=0;  je15=0;  je16=0; je17=0;  je18=0;
		//JP//
		 jp1=0;  jp2=0;  jp3=0;  jp4=0; jp5=0;  jp6=0;  jp7=0;  jp8=0; jp9=0;  jp10=0;  jp11=0;  jp12=0; jp13=0;  jp14=0;  jp15=0;  jp16=0; jp17=0;  jp18=0;
		//GF//
		 gf1=0;  gf2=0;  gf3=0;  gf4=0; gf5=0;  gf6=0;  gf7=0;  gf8=0; gf9=0;  gf10=0;  gf11=0;  gf12=0; gf13=0;  gf14=0;  gf15=0;  gf16=0; gf17=0;  gf18=0;
		//GC//
		 gc1=0;  gc2=0;  gc3=0;  gc4=0; gc5=0;  gc6=0;  gc7=0;  gc8=0; gc9=0;  gc10=0;  gc11=0;  gc12=0; gc13=0;  gc14=0;  gc15=0;  gc16=0; gc17=0;  gc18=0;
		//DG//
		 dg1=0;  dg2=0;  dg3=0;  dg4=0; dg5=0;  dg6=0;  dg7=0;  dg8=0; dg9=0;  dg10=0;  dg11=0;  dg12=0; dg13=0;  dg14=0;  dg15=0;  dg16=0; dg17=0;  dg18=0;
			
		 } //OK Cierra al snapshot lengt 0
		   
		  i=0;
		  //PTS//
		  ptse1=0;ptse2=0; ptse3=0;ptse4=0;ptse5=0;ptse6=0; ptse7=0;ptse8=0; ptse9=0;ptse10=0;ptse11=0;ptse12=0; ptse13=0;ptse14=0;ptse15=0;ptse16=0; ptse17=0;ptse18=0;	 
		//JJ//
		 jj1=0;  jj2=0;  jj3=0;  jj4=0; jj5=0;  jj6=0;  jj7=0;  jj8=0; jj9=0;  jj10=0;  jj11=0;  jj12=0; jj13=0;  jj14=0;  jj15=0;  jj16=0; jj17=0;  jj18=0;
		//JG//
		 jg1=0;  jg2=0;  jg3=0;  jg4=0; jg5=0;  jg6=0;  jg7=0;  jg8=0; jg9=0;  jg10=0;  jg11=0;  jg12=0; jg13=0;  jg14=0;  jg15=0;  jg16=0; jg17=0;  jg18=0;
		//JE//
		 je1=0;  je2=0;  je3=0;  je4=0; je5=0;  je6=0;  je7=0;  je8=0; je9=0;  je10=0;  je11=0;  je12=0; je13=0;  je14=0;  je15=0;  je16=0; je17=0;  je18=0;
		//JP//
		 jp1=0;  jp2=0;  jp3=0;  jp4=0; jp5=0;  jp6=0;  jp7=0;  jp8=0; jp9=0;  jp10=0;  jp11=0;  jp12=0; jp13=0;  jp14=0;  jp15=0;  jp16=0; jp17=0;  jp18=0;
		//GF//
		 gf1=0;  gf2=0;  gf3=0;  gf4=0; gf5=0;  gf6=0;  gf7=0;  gf8=0; gf9=0;  gf10=0;  gf11=0;  gf12=0; gf13=0;  gf14=0;  gf15=0;  gf16=0; gf17=0;  gf18=0;
		//GC//
		 gc1=0;  gc2=0;  gc3=0;  gc4=0; gc5=0;  gc6=0;  gc7=0;  gc8=0; gc9=0;  gc10=0;  gc11=0;  gc12=0; gc13=0;  gc14=0;  gc15=0;  gc16=0; gc17=0;  gc18=0;
		//DG//
		 dg1=0;  dg2=0;  dg3=0;  dg4=0; dg5=0;  dg6=0;  dg7=0;  dg8=0; dg9=0;  dg10=0;  dg11=0;  dg12=0; dg13=0;  dg14=0;  dg15=0;  dg16=0; dg17=0;  dg18=0;
		  
          snapshots.forEach(snapshot => {
          arr[i]=snapshot.val(); //arreglo generico
		  //console.log(arr[i]);
		  arrLocal[i]=arr[i].Equipo1 ; //arreglo equipo local
          arrVisita[i]=arr[i].Equipo2 ;//arreglo equipo visita
          arrGolVisita[i]=arr[i].gol2 ;//arreglo goles visita
          arrGolLocal[i]=arr[i].gol1 ; //arreglo goles local
			  //Comparaciones para saber cuantos partidos han jugado cada equipo (JJ)
			  //console.log("Vamos a imprimir snapshots "+ arr[i]);
			  		
			       if (arrLocal[i]==e1) { jj1+=1; }
			  else if (arrVisita[i]==e1){ jj1+=1; }
			  	   if (arrLocal[i]==e2) { jj2+=1; }
			  else if (arrVisita[i]==e2){ jj2+=1; }
			  	   if (arrLocal[i]==e3) { jj3+=1; }
			  else if (arrVisita[i]==e3){ jj3+=1; }
			       if (arrLocal[i]==e4) { jj4+=1; }
			  else if (arrVisita[i]==e4){ jj4+=1; }
			  
			       if (arrLocal[i]==e5) { jj5+=1; }
			  else if (arrVisita[i]==e5){ jj5+=1; }
			  	   if (arrLocal[i]==e6) { jj6+=1; }
			  else if (arrVisita[i]==e6){ jj6+=1; }
			  	   if (arrLocal[i]==e7) { jj7+=1; }
			  else if (arrVisita[i]==e7){ jj7+=1; }
			       if (arrLocal[i]==e8) { jj8+=1; }
			  else if (arrVisita[i]==e8){ jj8+=1; }
			   
			       if (arrLocal[i]==e9) { jj9+=1; }
			  else if (arrVisita[i]==e9){ jj9+=1; }
			  	   if (arrLocal[i]==e10) { jj10+=1; }
			  else if (arrVisita[i]==e10){ jj10+=1; }
			  	   if (arrLocal[i]==e11) { jj11+=1; }
			  else if (arrVisita[i]==e11){ jj11+=1; }
			       if (arrLocal[i]==e12) { jj12+=1; }
			  else if (arrVisita[i]==e12){ jj12+=1; }
			  
			       if (arrLocal[i]==e13) { jj13+=1; }
			  else if (arrVisita[i]==e13){ jj13+=1; }
			  	   if (arrLocal[i]==e14) { jj14+=1; }
			  else if (arrVisita[i]==e14){ jj14+=1; }
			  	   if (arrLocal[i]==e15) { jj15+=1; }
			  else if (arrVisita[i]==e15){ jj15+=1; }
			       if (arrLocal[i]==e16) { jj16+=1; }
			  else if (arrVisita[i]==e16){ jj16+=1; }
			       if (arrLocal[i]==e17) { jj17+=1; }
			  else if (arrVisita[i]==e17){ jj17+=1; }
			       if (arrLocal[i]==e18) { jj18+=1; }
			  else if (arrVisita[i]==e18){ jj18+=1; }
		
	                     //gana local
         if ( arrGolLocal[i]>arrGolVisita[i] ){
			 if(arrLocal[i]==e1){
				 gf1+=parseInt(arrGolLocal[i]); gc1+=parseInt(arrGolVisita[i]); ptse1+=3; jg1+=1;
			 }
			 else if(arrLocal[i]==e2){
				 gf2+=parseInt(arrGolLocal[i]); gc2+=parseInt(arrGolVisita[i]); ptse2+=3; jg2+=1;
			 }
			 else if(arrLocal[i]==e3){
				 gf3+=parseInt(arrGolLocal[i]); gc3+=parseInt(arrGolVisita[i]); ptse3+=3; jg3+=1;
			 }
			 else if(arrLocal[i]==e4){
				 gf4+=parseInt(arrGolLocal[i]); gc4+=parseInt(arrGolVisita[i]); ptse4+=3; jg4+=1;
			 }
			 else if(arrLocal[i]==e5){
				 gf5+=parseInt(arrGolLocal[i]); gc5+=parseInt(arrGolVisita[i]); ptse5+=3; jg5+=1;
			 }
			 else if(arrLocal[i]==e6){
				 gf6+=parseInt(arrGolLocal[i]); gc6+=parseInt(arrGolVisita[i]); ptse6+=3; jg6+=1;
			 }
			 else if(arrLocal[i]==e7){
				 gf7+=parseInt(arrGolLocal[i]); gc7+=parseInt(arrGolVisita[i]); ptse7+=3; jg7+=1;
			 }
			 else if(arrLocal[i]==e8){
				 gf8+=parseInt(arrGolLocal[i]); gc8+=parseInt(arrGolVisita[i]); ptse8+=3; jg8+=1;
			 }
			 else if(arrLocal[i]==e9){
				 gf9+=parseInt(arrGolLocal[i]); gc9+=parseInt(arrGolVisita[i]); ptse9+=3; jg9+=1;
			 }
			 else if(arrLocal[i]==e10){
				 gf10+=parseInt(arrGolLocal[i]); gc10+=parseInt(arrGolVisita[i]); ptse10+=3; jg10+=1;
			 }
			 else if(arrLocal[i]==e11){
				 gf11+=parseInt(arrGolLocal[i]); gc11+=parseInt(arrGolVisita[i]); ptse11+=3; jg11+=1;
			 }
			 else if(arrLocal[i]==e12){
				 gf12+=parseInt(arrGolLocal[i]); gc12+=parseInt(arrGolVisita[i]); ptse12+=3; jg12+=1;
			 }
			 else if(arrLocal[i]==e13){
				 gf13+=parseInt(arrGolLocal[i]); gc13+=parseInt(arrGolVisita[i]); ptse13+=3; jg13+=1;
			 }
			 else if(arrLocal[i]==e14){
				 gf14+=parseInt(arrGolLocal[i]); gc14+=parseInt(arrGolVisita[i]); ptse14+=3; jg14+=1;
			 }
			 else if(arrLocal[i]==e15){
				 gf15+=parseInt(arrGolLocal[i]); gc15+=parseInt(arrGolVisita[i]); ptse15+=3; jg15+=1;
			 }
			 else if(arrLocal[i]==e16){
				 gf16+=parseInt(arrGolLocal[i]); gc16+=parseInt(arrGolVisita[i]); ptse16+=3; jg16+=1;
			 }
			 else if(arrLocal[i]==e17){
				 gf17+=parseInt(arrGolLocal[i]); gc17+=parseInt(arrGolVisita[i]); ptse17+=3; jg17+=1;
			 }
			 else if(arrLocal[i]==e18){
				 gf18+=parseInt(arrGolLocal[i]); gc18+=parseInt(arrGolVisita[i]); ptse18+=3; jg18+=1;
			 }
         }
			  
			             // //gana visita//!!!!
         else if ( arrGolLocal[i]<arrGolVisita[i] ){

			 if(arrVisita[i]==e1){
				 gc1+=parseInt(arrGolLocal[i]); gf1+=parseInt(arrGolVisita[i]); ptse1+=3; jg1+=1;
			 }
			 else if(arrVisita[i]==e2){
				 gc2+=parseInt(arrGolLocal[i]); gf2+=parseInt(arrGolVisita[i]); ptse2+=3; jg2+=1;
			 }
			 else if(arrVisita[i]==e3){
				 gc3+=parseInt(arrGolLocal[i]); gf3+=parseInt(arrGolVisita[i]); ptse3+=3; jg3+=1;
			 }
			 else if(arrVisita[i]==e4){
				 gc4+=parseInt(arrGolLocal[i]); gf4+=parseInt(arrGolVisita[i]); ptse4+=3; jg4+=1;
			 }
			 else if(arrVisita[i]==e5){
				 gc5+=parseInt(arrGolLocal[i]); gf5+=parseInt(arrGolVisita[i]); ptse5+=3; jg5+=1;
			 }
			 else if(arrVisita[i]==e6){
				 gc6+=parseInt(arrGolLocal[i]); gf6+=parseInt(arrGolVisita[i]); ptse6+=3; jg6+=1;
			 }
			 else if(arrVisita[i]==e7){
				 gc7+=parseInt(arrGolLocal[i]); gf7+=parseInt(arrGolVisita[i]); ptse7+=3; jg7+=1;
			 }
			 else if(arrVisita[i]==e8){
				 gc8+=parseInt(arrGolLocal[i]); gf8+=parseInt(arrGolVisita[i]); ptse8+=3; jg8+=1;
			 }
			 else if(arrVisita[i]==e9){
				 gc9+=parseInt(arrGolLocal[i]); gf9+=parseInt(arrGolVisita[i]); ptse9+=3; jg9+=1;
			 }
			 else if(arrVisita[i]==e10){
				 gc10+=parseInt(arrGolLocal[i]); gf10+=parseInt(arrGolVisita[i]); ptse10+=3; jg10+=1;
			 }
			 else if(arrVisita[i]==e11){
				 gc11+=parseInt(arrGolLocal[i]); gf11+=parseInt(arrGolVisita[i]); ptse11+=3; jg11+=1;
			 }
			 else if(arrVisita[i]==e12){
				 gc12+=parseInt(arrGolLocal[i]); gf12+=parseInt(arrGolVisita[i]); ptse12+=3; jg12+=1;
			 }
			 else if(arrVisita[i]==e13){
				 gc13+=parseInt(arrGolLocal[i]); gf13+=parseInt(arrGolVisita[i]); ptse13+=3; jg13+=1;
			 }
			 else if(arrVisita[i]==e14){
				 gc14+=parseInt(arrGolLocal[i]); gf14+=parseInt(arrGolVisita[i]); ptse14+=3; jg14+=1;
			 }
			 else if(arrVisita[i]==e15){
				 gc15+=parseInt(arrGolLocal[i]); gf15+=parseInt(arrGolVisita[i]); ptse15+=3; jg15+=1;
			 }
			 else if(arrVisita[i]==e16){
				 gc16+=parseInt(arrGolLocal[i]); gf16+=parseInt(arrGolVisita[i]); ptse16+=3; jg16+=1;
			 }
			 else if(arrVisita[i]==e17){
				 gc17+=parseInt(arrGolLocal[i]); gf17+=parseInt(arrGolVisita[i]); ptse17+=3; jg17+=1;
			 }
			 else if(arrVisita[i]==e18){
				 gc18+=parseInt(arrGolLocal[i]); gf18+=parseInt(arrGolVisita[i]); ptse18+=3; jg18+=1;
			 }
			 
         }
			   
			  
			                  //pierde Local!!
			   if ( arrGolLocal[i]<arrGolVisita[i] ){

			 if(arrLocal[i]==e1){
				 gc1+=parseInt(arrGolVisita[i]); gf1+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e2){
				gc2+=parseInt(arrGolVisita[i]);	gf2+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e3){
				 gc3+=parseInt(arrGolVisita[i]);	gf3+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e4){
				gc4+=parseInt(arrGolVisita[i]);	gf4+=parseInt(arrGolLocal[i]);
			 } 
		     else if(arrLocal[i]==e5){
				gc5+=parseInt(arrGolVisita[i]);	gf5+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e6){
				gc6+=parseInt(arrGolVisita[i]);	gf6+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e7){
				gc7+=parseInt(arrGolVisita[i]);	gf7+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e8){
				gc8+=parseInt(arrGolVisita[i]);	gf8+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e9){
				gc9+=parseInt(arrGolVisita[i]);	gf9+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e10){
				gc10+=parseInt(arrGolVisita[i]);	gf10+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e11){
				gc11+=parseInt(arrGolVisita[i]);	gf11+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e12){
				gc12+=parseInt(arrGolVisita[i]);	gf12+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e13){
				gc13+=parseInt(arrGolVisita[i]);	gf13+=parseInt(arrGolLocal[i]);
			 }
			else if(arrLocal[i]==e14){
				gc14+=parseInt(arrGolVisita[i]);	gf14+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e15){
				gc15+=parseInt(arrGolVisita[i]);	gf15+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e16){
				gc16+=parseInt(arrGolVisita[i]);	gf16+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e17){
				gc17+=parseInt(arrGolVisita[i]);	gf17+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e18){
				gc18+=parseInt(arrGolVisita[i]);	gf18+=parseInt(arrGolLocal[i]);
				   
         }
			   }
			  
			  
			  //pierde Visita, le meto los goles en contra!!!!!!!!!!!!!!!!!!!!! 
			  if ( arrGolLocal[i]>arrGolVisita[i] ){ 

			 if(arrVisita[i]==e1){
				 gc1+=parseInt(arrGolLocal[i]); gf1+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e2){
				gc2+=parseInt(arrGolLocal[i]);  gf2+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e3){
				gc3+=parseInt(arrGolLocal[i]);	gf3+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e4){
				 gc4+=parseInt(arrGolLocal[i]); gf4+=parseInt(arrGolVisita[i]);
			 } 
			 else if(arrVisita[i]==e5){
				gc5+=parseInt(arrGolLocal[i]);  gf5+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e6){
				gc6+=parseInt(arrGolLocal[i]);	gf6+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e7){
				 gc7+=parseInt(arrGolLocal[i]); gf7+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e8){
				gc8+=parseInt(arrGolLocal[i]);  gf8+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e9){
				gc9+=parseInt(arrGolLocal[i]);	gf9+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e10){
				 gc10+=parseInt(arrGolLocal[i]); gf10+=parseInt(arrGolVisita[i]);
			 } 
			 else if(arrVisita[i]==e11){
				gc11+=parseInt(arrGolLocal[i]);  gf11+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e12){
				gc12+=parseInt(arrGolLocal[i]);	gf12+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e13){
				 gc13+=parseInt(arrGolLocal[i]); gf13+=parseInt(arrGolVisita[i]);
			 } 
			 else if(arrVisita[i]==e14){
				gc14+=parseInt(arrGolLocal[i]);	gf14+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e15){
				 gc15+=parseInt(arrGolLocal[i]); gf15+=parseInt(arrGolVisita[i]);
			 } 
			 else if(arrVisita[i]==e16){
				gc16+=parseInt(arrGolLocal[i]);  gf16+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e17){
				gc17+=parseInt(arrGolLocal[i]);	gf17+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e18){
				 gc18+=parseInt(arrGolLocal[i]); gf18+=parseInt(arrGolVisita[i]);
			 }	  	  
         }
			  
			             //empate!
         if ( arrGolLocal[i]==arrGolVisita[i] ){ //empatan
			 if(arrLocal[i]==e1 || arrVisita[i]==e1 ){
				 gf1+=parseInt(arrGolLocal[i]); gc1+=parseInt(arrGolVisita[i]); ptse1+=1; je1+=1;
			 }
			 if(arrLocal[i]==e2 || arrVisita[i]==e2){
				 gf2+=parseInt(arrGolLocal[i]); gc2+=parseInt(arrGolVisita[i]); ptse2+=1; je2+=1;
			 }
			 if(arrLocal[i]==e3 || arrVisita[i]==e3){
				 gf3+=parseInt(arrGolLocal[i]); gc3+=parseInt(arrGolVisita[i]); ptse3+=1; je3+=1;
			 }
			 if(arrLocal[i]==e4 || arrVisita[i]==e4 ){
				 gf4+=parseInt(arrGolLocal[i]); gc4+=parseInt(arrGolVisita[i]); ptse4+=1; je4+=1;
			 }
			 if(arrLocal[i]==e5 || arrVisita[i]==e5 ){
				 gf5+=parseInt(arrGolLocal[i]); gc5+=parseInt(arrGolVisita[i]); ptse5+=1; je5+=1;
			 }
			 if(arrLocal[i]==e6 || arrVisita[i]==e6 ){
				 gf6+=parseInt(arrGolLocal[i]); gc6+=parseInt(arrGolVisita[i]); ptse6+=1; je6+=1;
			 }
			 if(arrLocal[i]==e7 || arrVisita[i]==e7 ){
				 gf7+=parseInt(arrGolLocal[i]); gc7+=parseInt(arrGolVisita[i]); ptse7+=1; je7+=1;
			 }
			 if(arrLocal[i]==e8 || arrVisita[i]==e8 ){
				 gf8+=parseInt(arrGolLocal[i]); gc8+=parseInt(arrGolVisita[i]); ptse8+=1; je8+=1;
			 }
			 if(arrLocal[i]==e9 || arrVisita[i]==e9 ){
				 gf9+=parseInt(arrGolLocal[i]); gc9+=parseInt(arrGolVisita[i]); ptse9+=1; je9+=1;
			 }
			 if(arrLocal[i]==e10 || arrVisita[i]==e10){
				 gf10+=parseInt(arrGolLocal[i]); gc10+=parseInt(arrGolVisita[i]); ptse10+=1; je10+=1;
			 }
			 if(arrLocal[i]==e11 || arrVisita[i]==e11 ){
				 gf11+=parseInt(arrGolLocal[i]); gc11+=parseInt(arrGolVisita[i]); ptse11+=1; je11+=1;
			 }
			 if(arrLocal[i]==e12 || arrVisita[i]==e12 ){
				 gf12+=parseInt(arrGolLocal[i]); gc12+=parseInt(arrGolVisita[i]); ptse12+=1; je12+=1;
			 }
			 if(arrLocal[i]==e13 || arrVisita[i]==e13 ){
				 gf13+=parseInt(arrGolLocal[i]); gc13+=parseInt(arrGolVisita[i]); ptse13+=1; je13+=1;
			 }
			 if(arrLocal[i]==e14 || arrVisita[i]==e14 ){
				 gf14+=parseInt(arrGolLocal[i]); gc14+=parseInt(arrGolVisita[i]); ptse14+=1; je14+=1;
			 }
			 if(arrLocal[i]==e15 || arrVisita[i]==e15 ){
				 gf15+=parseInt(arrGolLocal[i]); gc15+=parseInt(arrGolVisita[i]); ptse15+=1; je15+=1;
			 }
			 if(arrLocal[i]==e16 || arrVisita[i]==e16 ){
				 gf16+=parseInt(arrGolLocal[i]); gc16+=parseInt(arrGolVisita[i]); ptse16+=1; je16+=1;
			 }
			 if(arrLocal[i]==e17 || arrVisita[i]==e17 ){
				 gf17+=parseInt(arrGolLocal[i]); gc17+=parseInt(arrGolVisita[i]); ptse17+=1; je17+=1;
			 }
			 if(arrLocal[i]==e18 || arrVisita[i]==e18 ){
				 gf18+=parseInt(arrGolLocal[i]); gc18+=parseInt(arrGolVisita[i]); ptse18+=1; je18+=1;
			 }

         }
			  //JUEGOS PERDIDOS!
			
			  jp1=jj1-jg1-je1
			  jp2=jj2-jg2-je2
			  jp3=jj3-jg3-je3
			  jp4=jj4-jg4-je4
			  jp5=jj5-jg5-je5
			  jp6=jj6-jg6-je6
			  jp7=jj7-jg7-je7
			  jp8=jj8-jg8-je8
			  jp9=jj9-jg9-je9
			  jp10=jj10-jg10-je10
			  jp11=jj11-jg11-je11
			  jp12=jj12-jg12-je12
			  jp13=jj13-jg13-je13
			  jp14=jj14-jg14-je14
			  jp15=jj15-jg15-je15
			  jp16=jj16-jg16-je16
			  jp17=jj17-jg17-je17
			  jp18=jj18-jg18-je18
			  //DIFERENCIA DE GOLES!
			  dg1=gf1-gc1
			  dg2=gf2-gc2
			  dg3=gf3-gc3
			  dg4=gf4-gc4
			  dg5=gf5-gc5
			  dg6=gf6-gc6
			  dg7=gf7-gc7
			  dg8=gf8-gc8
			  dg9=gf9-gc9
			  dg10=gf10-gc10
			  dg11=gf11-gc11
			  dg12=gf12-gc12
			  dg13=gf13-gc13
			  dg14=gf14-gc14
			  dg15=gf15-gc15
			  dg16=gf16-gc16
			  dg17=gf17-gc17
			  dg18=gf18-gc18
		           i=i+1;
		});
        });  
        })
           this.storage.get('tablaConc').then ((tablaConc)=> {
			           if (numEquipos==1){
				this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
			  }
			      else if (numEquipos==2){
				this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
			    this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2});   
			  }
			      else if (numEquipos==3){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			  }
			      else if (numEquipos==4){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4}); 
			  }
				  else if (numEquipos==5){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3});
				  this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4}); 
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
			  }
			      else if (numEquipos==6){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6}); 
			  }
				  else if (numEquipos==7){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
			  }
				  else if (numEquipos==8){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6}); 
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
			  }
				  else if (numEquipos==9){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
			  }
				  else if (numEquipos==10){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
			  }
				  else if (numEquipos==11){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
			  }
				  else if (numEquipos==12){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
			  }
				  else if (numEquipos==13){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
				  this.user1.update(key13,{ PTS: ptse13,JJ:  jj13, G: jg13, E: je13, P: jp13, GF: gf13, GC: gc13, DG: dg13});
			  }
				  else if (numEquipos==14){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
				  this.user1.update(key13,{ PTS: ptse13,JJ:  jj13, G: jg13, E: je13, P: jp13, GF: gf13, GC: gc13, DG: dg13});
				  this.user1.update(key14,{ PTS: ptse14,JJ:  jj14, G: jg14, E: je14, P: jp14, GF: gf14, GC: gc14, DG: dg14});
			  }
				  else if (numEquipos==15){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
				  this.user1.update(key13,{ PTS: ptse13,JJ:  jj13, G: jg13, E: je13, P: jp13, GF: gf13, GC: gc13, DG: dg13});
				  this.user1.update(key14,{ PTS: ptse14,JJ:  jj14, G: jg14, E: je14, P: jp14, GF: gf14, GC: gc14, DG: dg14});
				  this.user1.update(key15,{ PTS: ptse15,JJ:  jj15, G: jg15, E: je15, P: jp15, GF: gf15, GC: gc15, DG: dg15});
			  }
				  else if (numEquipos==16){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
				  this.user1.update(key13,{ PTS: ptse13,JJ:  jj13, G: jg13, E: je13, P: jp13, GF: gf13, GC: gc13, DG: dg13});
				  this.user1.update(key14,{ PTS: ptse14,JJ:  jj14, G: jg14, E: je14, P: jp14, GF: gf14, GC: gc14, DG: dg14});
				  this.user1.update(key15,{ PTS: ptse15,JJ:  jj15, G: jg15, E: je15, P: jp15, GF: gf15, GC: gc15, DG: dg15});
				  this.user1.update(key16,{ PTS: ptse16,JJ:  jj16, G: jg16, E: je16, P: jp16, GF: gf16, GC: gc16, DG: dg16});
			  }
				  else if (numEquipos==17){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
				  this.user1.update(key13,{ PTS: ptse13,JJ:  jj13, G: jg13, E: je13, P: jp13, GF: gf13, GC: gc13, DG: dg13});
				  this.user1.update(key14,{ PTS: ptse14,JJ:  jj14, G: jg14, E: je14, P: jp14, GF: gf14, GC: gc14, DG: dg14});
				  this.user1.update(key15,{ PTS: ptse15,JJ:  jj15, G: jg15, E: je15, P: jp15, GF: gf15, GC: gc15, DG: dg15});
				  this.user1.update(key16,{ PTS: ptse16,JJ:  jj16, G: jg16, E: je16, P: jp16, GF: gf16, GC: gc16, DG: dg16});
				  this.user1.update(key17,{ PTS: ptse17,JJ:  jj17, G: jg17, E: je17, P: jp17, GF: gf17, GC: gc17, DG: dg17});
			  }
				  else if (numEquipos==18){
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4});
				  this.user1.update(key5,{ PTS: ptse5,JJ:  jj5, G: jg5, E: je5, P: jp5, GF: gf5, GC: gc5, DG: dg5}); 
				  this.user1.update(key6,{ PTS: ptse6,JJ:  jj6, G: jg6, E: je6, P: jp6, GF: gf6, GC: gc6, DG: dg6});
				  this.user1.update(key7,{ PTS: ptse7,JJ:  jj7, G: jg7, E: je7, P: jp7, GF: gf7, GC: gc7, DG: dg7});
				  this.user1.update(key8,{ PTS: ptse8,JJ:  jj8, G: jg8, E: je8, P: jp8, GF: gf8, GC: gc8, DG: dg8});
				  this.user1.update(key9,{ PTS: ptse9,JJ:  jj9, G: jg9, E: je9, P: jp9, GF: gf9, GC: gc9, DG: dg9});
				  this.user1.update(key10,{ PTS: ptse10,JJ:  jj10, G: jg10, E: je10, P: jp10, GF: gf10, GC: gc10, DG: dg10});
				  this.user1.update(key11,{ PTS: ptse11,JJ:  jj11, G: jg11, E: je11, P: jp11, GF: gf11, GC: gc11, DG: dg11});
				  this.user1.update(key12,{ PTS: ptse12,JJ:  jj12, G: jg12, E: je12, P: jp12, GF: gf12, GC: gc12, DG: dg12});
				  this.user1.update(key13,{ PTS: ptse13,JJ:  jj13, G: jg13, E: je13, P: jp13, GF: gf13, GC: gc13, DG: dg13});
				  this.user1.update(key14,{ PTS: ptse14,JJ:  jj14, G: jg14, E: je14, P: jp14, GF: gf14, GC: gc14, DG: dg14});
				  this.user1.update(key15,{ PTS: ptse15,JJ:  jj15, G: jg15, E: je15, P: jp15, GF: gf15, GC: gc15, DG: dg15});
				  this.user1.update(key16,{ PTS: ptse16,JJ:  jj16, G: jg16, E: je16, P: jp16, GF: gf16, GC: gc16, DG: dg16});
				  this.user1.update(key17,{ PTS: ptse17,JJ:  jj17, G: jg17, E: je17, P: jp17, GF: gf17, GC: gc17, DG: dg17});
				  this.user1.update(key18,{ PTS: ptse18,JJ:  jj18, G: jg18, E: je18, P: jp18, GF: gf18, GC: gc18, DG: dg18});
			  }
    	console.log("RESULTADOS YA ACABO");	  		
			
			
			
			
		});

		});

	}
	 //termina el storage
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

   ionViewDidEnter() {
	   this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});
	   		
		this.storage.get('tablaConc').then ((tablaConc)=> {
		this.getTablaConc(tablaConc);
		});

		this.storage.get('resultadosConc').then ((resultadosConc)=> {
		this.getResultadosConc(resultadosConc)
		});
		
		this.obtenerDatos();
	
  }

        
	createUser(){ //Agregar solo para meter partidos que no estuvieron en el roll
		let newUserModal = this.alertController.create({
			title:"Nuevo Partido",
			message:"Agrega aquí un nuevo partido",
			inputs: [
				{
					name: "Equipo1",
					placeholder :"Equipo1"
				},
               
				{
					name:"Equipo2",
					placeholder:"Equipo2"
				},
               
                {
					name:"Fecha",
					placeholder:"Fecha"
				},
                {
					name:"Hora",
					placeholder:"Hora"
				},
                {
					name:"Jornada",
					placeholder:"Jornada"
				}
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
						
						
                        this.user2.push({
							Equipo1: data.Equipo1,
                            Equipo2: data.Equipo2,
                            Fecha: data.Fecha,
                            Hora: data.Hora,
                            Jornada: "jornada"+data.Jornada,
                            
                            });
                        
                        this.user1.push({
							Equipo1: data.Equipo1,
                            Equipo2: data.Equipo2,
                            Fecha: data.Fecha,
                            Hora: data.Hora,
                            Jornada: "jornada"+data.Jornada,
                            
                            });
					}
				}
				
			]
		});
		
		newUserModal.present(newUserModal);
	}
	
	removeUser(user2){
  	
        this.user2.remove(user2);
  }
	
	updatePartido(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Marcador",
			message:"Actualizar Marcador"+ " "+ u.Equipo1 + " " + "vs"+ " " + u.Equipo2,
			inputs: [
				
                {
					name:"gol1",
					placeholder:u.Equipo1 
				},
                {
					name:"gol2",
					placeholder:u.Equipo2 
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user2.update(u.$key,{
                            gol1:data.gol1,
                            gol2:data.gol2
                            
    
						});
					}
				}
				
			]
		});
		
		updateUserModal.present(updateUserModal);
	}
    updateEquipo1(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Equipo:",
			message:"Actualizar"+ " "+ u.Equipo1,
			inputs: [
				
                {
					name:"Equipo1",
					placeholder:u.Equipo1 
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user2.update(u.$key,{
                           Equipo1: data.Equipo1
                                                        
    
						});
					}
				}
				
			]
		});
		
		updateUserModal.present(updateUserModal);
	}
     updateEquipo2(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Equipo:",
			message:"Actualizar"+ " "+ u.Equipo2,
			inputs: [
				
                {
					name:"Equipo2",
					placeholder:u.Equipo2 
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user2.update(u.$key,{
                           Equipo2: data.Equipo2
                                                        
    
						});
					}
				}
				
			]
		});
         
		
		updateUserModal.present(updateUserModal);
	}
    updateFecha(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Fecha:",
			message:"Actualizar Fecha:"+ " "+ u.Fecha,
			inputs: [
				
                {
					name:"Fecha",
					placeholder:"Fecha"
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user2.update(u.$key,{
                           Fecha: data.Fecha                             
						});
					}
				}
				
			]
		});
         
		
		updateUserModal.present(updateUserModal);
	}
    
     updateHora(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Hora:",
			message:"Actualizar Hora:"+ " "+ u.Hora,
			inputs: [
				
                {
					name:"Hora",
					placeholder:"Hora" 
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user2.update(u.$key,{
                           Hora: data.Hora
                                                        
    
						});
					}
				}
				
			]
		});
         
		
		updateUserModal.present(updateUserModal);
	}
	 updateJornada(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Jornada:",
			message:"Actualizar Jornada:"+ " "+ u.Jornada,
			inputs: [
				
                {
					name:"Jornada",
					placeholder:"Jornada" 
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
						console.log ('cancel clic');
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user2.update(u.$key,{
                           Jornada: "J" + " " +data.Jornada
                                                        
    
						});
					}
				}
				
			]
		});
         
		
		updateUserModal.present(updateUserModal);
	}
	
	
    
    launchLigasPage(){
        this.navCtrl.push(Ligas);
        
    }
    
 
    
    reiniciar(){// Borrar Resultados
        
  let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Deseas Reiniciar los partidos?',          
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
         this.user3.remove(); 
          
        }
      }
    ]
  });
  alert.present();
        
}
    
borrarPartido(user2){
   let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Deseas Cancelar este partido?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.user2.remove(user2);
          
        }
      }
    ]
  });
  alert.present();
     
}    
    
}
