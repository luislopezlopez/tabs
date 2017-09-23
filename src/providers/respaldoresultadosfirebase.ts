import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { tablaConc } from '../pages/ligas/ligas';
import { liga } from '../pages/ligas/ligas';
import { resultadosConc } from '../pages/ligas/ligas';
var numEquipos=0;
var arrkeys=[];
var arrg =[];
var arrEquipos =[];
var e1='no'; var e2='no'; var e3='no'; var e4='no'; 
var ptse1=0;var ptse2=0;var ptse3=0;var ptse4=0;
var jj1=0; var jj2=0; var jj3=0; var jj4=0;
var jg1=0; var jg2=0; var jg3=0; var jg4=0;
var je1=0; var je2=0; var je3=0; var je4=0;
var jp1=0; var jp2=0; var jp3=0; var jp4=0;
var gf1=0; var gf2=0; var gf3=0; var gf4=0;
var gc1=0; var gc2=0; var gc3=0; var gc4=0;
var dg1; var dg2; var dg3; var dg4;
var key1; var key2; var key3; var key4;

@Injectable()
export class Resultadosfirebase {
	
 ligaSelec: any 
  user3 : FirebaseListObservable<any>;
  user1 : FirebaseListObservable<any>;
  user2 : FirebaseListObservable<any>;
  	constructor(public database: AngularFireDatabase) {
		this.ligaSelec=liga;
		this.user2= this.database.list(resultadosConc),this.user3= this.database.list(resultadosConc),this.user1= this.database.list(tablaConc);}
    
   ionViewWillEnter() {
	   arrkeys=[];
	   this.ligaSelec=liga;
       //Adquirimos todos los equipos
        var j=0;
        var i=0;
        numEquipos=0;
	   key1=undefined;	   key2=undefined; 	   key3=undefined;	   key4=undefined;
        //var p=0;
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
               e1= arrEquipos[0]; 
			   key1=arrkeys[0];    //{A} KEY FORZADA!!! 
              }
          else if(j==1){   
               e2= arrEquipos[1];
			   key2=arrkeys[1];
              }
          else if(j==2){   
               e3= arrEquipos[2]; 
			    key3=arrkeys[2];
               }
          else if(j==3){   
               e4= arrEquipos[3];
			   key4=arrkeys[3];
              }
          d=d+1;
          j=j+1;
              
          numEquipos+=1;
		  
    });
   
  })
       var arr =[];
       var arrLocal =[];
       var arrGolLocal =[];
       var arrGolVisita =[];
       var arrVisita =[];
	   
       i=0; 
      
       console.log("ionWillEnter pagina resultados");
       //console.log(resultadosConc);
       this.user3=this.database.list(resultadosConc, {
        preserveSnapshot: true,
        });
       this.user3.subscribe(snapshots => {
		 if (snapshots.length==0){ //Reiniciamos todo a cero
			 //console.log("snapshots ==========0");
			 
			 if (numEquipos==1 ){
				this.user1.update(key1,{PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			  if (numEquipos==2){
				this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			    this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'});   
			  }
			  if (numEquipos==3){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
			  if (numEquipos==4){
				  this.user1.update(key1,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key2,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
				  this.user1.update(key3,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			      this.user1.update(key4,{ PTS: '0',JJ:  '0', G: '0', E: '0', P: '0', GF: '0', DG : '0', GC:'0'}); 
			  }
		
		  ptse1=0;ptse2=0; ptse3=0;ptse4=0;
		  jj1=0;jj2=0;jj3=0;jj4=0;
		  jg1=0; jg2=0; jg3=0; jg4=0;
          je1=0; je2=0; je3=0; je4=0;
		  jp1=0; jp2=0; jp3=0; jp4=0;
		  gf1=0; gf2=0; gf3=0; gf4=0;
		  gc1=0; gc2=0; gc3=0; gc4=0;
			
		 }
		   
		  i=0;
		  ptse1=0;ptse2=0; ptse3=0;ptse4=0;
		  jj1=0;jj2=0;jj3=0;jj4=0;
		  jg1=0; jg2=0; jg3=0; jg4=0;
          je1=0; je2=0; je3=0; je4=0;
		  jp1=0; jp2=0; jp3=0; jp4=0;
		  gf1=0; gf2=0; gf3=0; gf4=0;
		  gc1=0; gc2=0; gc3=0; gc4=0;
		  
          snapshots.forEach(snapshot => {
          arr[i]=snapshot.val(); //arreglo generico
          arrLocal[i]=arr[i].Equipo1 ; //arreglo equipo local
          arrVisita[i]=arr[i].Equipo2 ;//arreglo equipo visita
          arrGolVisita[i]=arr[i].gol2 ;//arreglo goles visita
          arrGolLocal[i]=arr[i].gol1 ; //arreglo goles local
			  //Comparaciones para saber cuantos partidos han jugado cada equipo (JJ)	  
			  if (arrLocal[i]==e1){jj1+=1;}
			  else if (arrVisita[i]==e1){ jj1+=1; }
			  	   if (arrLocal[i]==e2) { jj2+=1; }
			  else if (arrVisita[i]==e2){ jj2+=1; }
			  	   if (arrLocal[i]==e3) { jj3+=1; }
			  else if (arrVisita[i]==e3){ jj3+=1; }
			       if (arrLocal[i]==e4) { jj4+=1; }
			  else if (arrVisita[i]==e4){ jj4+=1; }
			  
			  
         if ( arrGolLocal[i]>arrGolVisita[i] ){ //gana local, meto las posibles combinaciones, en este caso solo 4 equipos para probar
			 if(arrLocal[i]==e1){
				 gf1+=parseInt(arrGolLocal[i]);
				 gc1+=parseInt(arrGolVisita[i]);
				 ptse1+=3;
				 jg1+=1;
			 }
			 else if(arrLocal[i]==e2){
				 gf2+=parseInt(arrGolLocal[i]);
				 gc2+=parseInt(arrGolVisita[i]);
				 ptse2+=3;
				 jg2+=1;
			 }
			 else if(arrLocal[i]==e3){
				 gf3+=parseInt(arrGolLocal[i]);
				 gc3+=parseInt(arrGolVisita[i]);
				 ptse3+=3;
				 jg3+=1;
			 }
			 else if(arrLocal[i]==e4){
				 gf4+=parseInt(arrGolLocal[i]);
				 gc4+=parseInt(arrGolVisita[i]);
				 ptse4+=3;
				 jg4+=1;
			 }
			 
			   
         }
         if ( arrGolLocal[i]<arrGolVisita[i] ){ //gana visita
			 if(arrVisita[i]==e1){
				 gc1+=parseInt(arrGolLocal[i]);
				 gf1+=parseInt(arrGolVisita[i]);
				 ptse1+=3;
				 jg1+=1;
			 }
			 else if(arrVisita[i]==e2){
				 gc2+=parseInt(arrGolLocal[i]);
				 gf2+=parseInt(arrGolVisita[i]);
				 ptse2+=3;
				 jg2+=1;
			 }
			 else if(arrVisita[i]==e3){
				 gc3+=parseInt(arrGolLocal[i]);
				 gf3+=parseInt(arrGolVisita[i]);
				 ptse3+=3;
				 jg3+=1;
			 }
			 else if(arrVisita[i]==e4){
				 gc4+=parseInt(arrGolLocal[i]);
				 gf4+=parseInt(arrGolVisita[i]);
				 ptse4+=3;
				 jg4+=1;
			 }
         }
			   if ( arrGolLocal[i]<arrGolVisita[i] ){ //pierde Local
			 if(arrLocal[i]==e1){
				 gc1+=parseInt(arrGolVisita[i]);
				 gf1+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e2){
				gc2+=parseInt(arrGolVisita[i]);
				gf2+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e3){
				gc3+=parseInt(arrGolVisita[i]);
				gf3+=parseInt(arrGolLocal[i]);
			 }
			 else if(arrLocal[i]==e4){
				gc4+=parseInt(arrGolVisita[i]);
				gf4+=parseInt(arrGolLocal[i]);
			 }   
         }
			  
			  if ( arrGolLocal[i]>arrGolVisita[i] ){ //pierde Visita, le meto los goles en contra!!!!!!!!!!!!!!!!!!!!! pero me falta, necesito revisar las combinaciones, pero no estoy seguro, alomejor ya está-
			 if(arrVisita[i]==e1){
				 gc1+=parseInt(arrGolLocal[i]);
				 gf1+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e2){
				gc2+=parseInt(arrGolLocal[i]);
				gf2+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e3){
				gc3+=parseInt(arrGolLocal[i]);
				gf3+=parseInt(arrGolVisita[i]);
			 }
			 else if(arrVisita[i]==e4){
				 gc4+=parseInt(arrGolLocal[i]);
				 gf4+=parseInt(arrGolVisita[i]);
			 }   
         }
			  
			  
			  
			  
         if ( arrGolLocal[i]==arrGolVisita[i] ){ //empatan
			 if(arrLocal[i]==e1){
				 gf1+=parseInt(arrGolLocal[i]);
				 gc1+=parseInt(arrGolVisita[i]);
				 ptse1+=1;
				 je1+=1;
			 }
			 if(arrVisita[i]==e1){
				 gf1+=parseInt(arrGolLocal[i]);
				 gc1+=parseInt(arrGolVisita[i]);
				 ptse1+=1;
				 je1+=1;
			 }
			 if(arrLocal[i]==e2){
				 gf2+=parseInt(arrGolLocal[i]);
				 gc2+=parseInt(arrGolVisita[i]);
				 ptse2+=1;
				 je2+=1;
			 }
			 if(arrVisita[i]==e2){
				 gf2+=parseInt(arrGolLocal[i]);
				 gc2+=parseInt(arrGolVisita[i]);
				 ptse2+=1;
				 je2+=1;
			 }
			 if(arrLocal[i]==e3){
				 gf3+=parseInt(arrGolLocal[i]);
				 gc3+=parseInt(arrGolVisita[i]);
				 ptse3+=1;
				 je3+=1;
			 }
			 if(arrVisita[i]==e3){
				 gf3+=parseInt(arrGolLocal[i]);
				 gc3+=parseInt(arrGolVisita[i]);
				 ptse3+=1;
				 je3+=1;
			 }
			 if(arrLocal[i]==e4){
				 gf4+=parseInt(arrGolLocal[i]);
				 gc4+=parseInt(arrGolVisita[i]);
				 ptse4+=1;
				 je4+=1;
			 }
			 if(arrVisita[i]==e4){
				 gf4+=parseInt(arrGolLocal[i]);
				 gc4+=parseInt(arrGolVisita[i]);
				 ptse4+=1;
				 je4+=1;
			 }
			 
         }
       

          i=i+1;
			  //JUEGOS PERDIDOS!
			  jp1=jj1-jg1-je1
			  jp2=jj2-jg2-je2
			  jp3=jj3-jg3-je3
			  jp4=jj4-jg4-je4
			  //DIFERENCIA DE GOLES!
			  dg1=gf1-gc1
			  dg2=gf2-gc2
			  dg3=gf3-gc3
			  dg4=gf4-gc4
				
			  
			  
		
			  //Si hay 1 equipo, solo escribe 1 columna en la tabla, si hay 2 , escribe SOLO 2, y así sucesivamente
			  if (numEquipos==1 ){
				  //console.log("solo 1 equipo")
				this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
			  }
			  else if (numEquipos==2){
				  //console.log("solo 2 equipo")
				this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
			    this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2});   
			  }
			  else if (numEquipos==3){
				  //console.log("solo 3 equipo")
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			  }
			  else if (numEquipos==4){
				  //console.log("solo 4 equipo")
				  this.user1.update(key1,{ PTS: ptse1,JJ:  jj1, G: jg1, E: je1, P: jp1, GF: gf1, GC: gc1, DG: dg1}); 
				  this.user1.update(key2,{ PTS: ptse2,JJ:  jj2, G: jg2, E: je2, P: jp2, GF: gf2, GC: gc2, DG: dg2}); 
				  this.user1.update(key3,{ PTS: ptse3,JJ:  jj3, G: jg3, E: je3, P: jp3, GF: gf3, GC: gc3, DG: dg3}); 
			      this.user1.update(key4,{ PTS: ptse4,JJ:  jj4, G: jg4, E: je4, P: jp4, GF: gf4, GC: gc4, DG: dg4}); 
			  }
			  
         
    });

    
  })

    	//console.log("RESULTADOS YA ACABO");	  
  }
}