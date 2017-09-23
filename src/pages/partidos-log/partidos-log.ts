//Mejoras En esta pagina:
//1.- Al terminar un partido actualizar automaticamente la tabla, actualmente tengo que dar clic en resultados por que de ahí se manda a llamar la función que actualiza la tabla.
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResultadosPage } from '../resultados/resultados';
import { CanchasLogPage } from '../canchas-log/canchas-log';
import { LoadingController } from 'ionic-angular';

//var objetos=[];
//var arr =[];
var arr =[];
export var d=0;
var equipo1;
var equipo2;
var golequipo1;
var golequipo2;
var i=0;
var e1='no'; var e2='no'; var e3='no'; var e4='no'; var e5='no'; var e6='no'; var e7='no'; var e8='no'; var e9='no'; var e10='no'; var e11='no'; var e12='no';var e13='no';var e14='no';var e15='no';var e16='no';var e17='no';var e18='no';
var fechaHoy;
var fechaSplit2;
var fechaSplit3;
var fechaSele;
var numMes;
var hora;
var horaInt;

var año;
var mes;
var dia;
var sinNomMes;
var añoSplit;
var horaSele;
var min;
var period;
@Component({
  selector: 'page-partidos-log',
  templateUrl: 'partidos-log.html',
})
export class PartidosLogPage {
	

chosenDate2: String = new Date().toISOString()
public fechaSubir: String
public horaSubir:String
public currentDate: any
public chosenDate: any
public chosenHour: any
public minDate:any
public maxDate="2018-01-02";
public añoHoy:any
public diaHoy:any
public mesHoy:any

@ViewChild('datePicker') datePicker;
@ViewChild('datePicker2') datePicker2;
@ViewChild('datePicker1') datePicker1;
  sesionMenu:any
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
	
		this.storage.get('sesion').then ((sesion)=> { 
			if(sesion=="iniciada") {
				this.sesionMenu="Cerrar Sesión";
					}
		    else if(sesion==null)  
				{
			   this.sesionMenu="Iniciar Sesión"
				}
		  
		  }); 
     d=0;
     i=0; 
    }

	cierreSesion(){
		this.storage.get('sesion').then ((sesion)=> {
        this.storage.remove('sesion');
		});

	}
	
	
	updateHora1(u){
	horaSele=this.chosenHour;
	min=horaSele.split(":")[1];
	hora=horaSele.split(":")[0];
    horaInt=parseInt(hora,10)
	
	switch(horaInt){
		
				case 0:
                hora = "12";
			    period="AM";
                break;
				case 1:
                hora = "1";
			    period="AM";
                break;
				case 2:
                hora = "2";
			    period="AM";
                break;
			    case 3:
                hora = "3";
			    period="AM";
                break;
			    case 4:
                hora = "4";
			    period="AM";
                break;
			    case 5:
                hora = "5";
			    period="AM";
                break;
			    case 6:
                hora = "6";
			    period="AM";
                break;
			    case 7:
                hora = "7";
			    period="AM";
                break;
			    case 8:
                hora = "8";
			    period="AM";
                break;
			    case 9:
                hora = "9";
			    period="AM";
                break;
			    case 10:
                hora = "10";
			    period="AM";
                break;
			    case 11:
                hora = "11";
			    period="AM";
                break;
			    case 12:
                hora = "12";
			    period="PM";
                break;
			    case 13:
                hora = "1";
			    period="PM";
                break;
			    case 14:
                hora = "2";
			    period="PM";
                break;
			    case 15:
                hora = "3";
			    period="PM";
                break;
			    case 16:
                hora = "4";
			    period="PM";
                break;
			    case 17:
                hora = "5";
			    period="PM";
                break;
			    case 18:
                hora = "6";
			    period="PM";
                break;
			    case 19:
                hora = "7";
			    period="PM";
                break;
			    case 20:
                hora = "8";
			    period="PM";
                break;
			    case 21:
                hora = "9";
			    period="PM";
                break;
			    case 22:
                hora = "10";
			    period="PM";
                break;
			    case 23:
                hora = "11";
			    period="PM";
                break;
			    		
	} 
		this.horaSubir=hora+":"+min+" "+period;
		this.user1.update(u.$key,{ Hora: this.horaSubir});
	
	}
updateHora2(u){ //Me quedé aquí , debo hacer los cases para actualizar todos los meses y de ahí seguirme con las horas

  fechaSele=this.chosenDate;
  dia=fechaSele.split("-")[2];
  sinNomMes=fechaSele.split("-")[1];
  añoSplit=fechaSele.split("-")[0];
  año=(añoSplit.split("20")[1]);
  if(sinNomMes<10)
	  {
		sinNomMes=(sinNomMes.split("0")[1]);
		
	  }
		
		numMes = parseInt(sinNomMes, 10);
		
		 		switch(numMes){
				case 1:
                mes = "Ene";
                break;
				case 2:
                mes = "Feb";
                break;
				case 3:
                mes = "Mar";
                break;
				case 4:
                mes = "Abr";
                break;
				case 5:
                mes = "May";
                break;
				case 6:
                mes = "Jun";
                break;
				case 7:
                mes = "Jul";
                break;				
				case 8:
                mes = "Ago";
                break;
				case 9:
                mes = "Sep";
                break;
				case 10:
                mes = "Oct";
                break;
				case 11:
                mes = "Nov";
                break;
				case 12:
                mes = "Dic";
                break;
						
				
		}

  this.fechaSubir=dia+" "+mes+" "+año;
  this.user1.update(u.$key,{ Hora: this.fechaSubir});	
	}





































	updateFecha1(u){ //Me quedé aquí , debo hacer los cases para actualizar todos los meses y de ahí seguirme con las horas

  fechaSele=this.chosenDate;
  dia=fechaSele.split("-")[2];
  sinNomMes=fechaSele.split("-")[1];
  añoSplit=fechaSele.split("-")[0];
  año=(añoSplit.split("20")[1]);
  if(sinNomMes<10)
	  {
		sinNomMes=(sinNomMes.split("0")[1]);
		
	  }
		
		numMes = parseInt(sinNomMes, 10);
		
		 		switch(numMes){
				case 1:
                mes = "Ene";
                break;
				case 2:
                mes = "Feb";
                break;
				case 3:
                mes = "Mar";
                break;
				case 4:
                mes = "Abr";
                break;
				case 5:
                mes = "May";
                break;
				case 6:
                mes = "Jun";
                break;
				case 7:
                mes = "Jul";
                break;				
				case 8:
                mes = "Ago";
                break;
				case 9:
                mes = "Sep";
                break;
				case 10:
                mes = "Oct";
                break;
				case 11:
                mes = "Nov";
                break;
				case 12:
                mes = "Dic";
                break;
						
				
		}

  this.fechaSubir=dia+" "+mes+" "+año;
  this.user1.update(u.$key,{ Fecha: this.fechaSubir});	
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
     ionViewDidEnter(){
	fechaHoy=(new Date().toISOString())
	fechaSplit2=fechaHoy.split("T");
	fechaSplit3=fechaSplit2[0];
	this.minDate=fechaSplit3;
		 
	console.log("entrando a partidos");	 
	 }
	presentLoadingDefault() {
		  let loading = this.loadingCtrl.create({
			//spinner: 'default',  
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
   
   
    
     updateEquipo1(u){
		 console.log("actualizar"+ u);
		  if (e1==='no'){
			  let alert = this.alertCtrl.create({
              title: 'Sin Equipos',
              subTitle: 'Agrega Equipos desde la tabla general',
              buttons: ['Aceptar']
                       });
                       alert.present();
			}
		 else{
	     	let alert = this.alertController.create({
		   		
			title:"Actualizar Equipo:",
			message:"Actualizar",
			inputs: [
	         e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18
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
                        equipo1=data
						if(equipo1==undefined||equipo1==""){
							this.errorSeleccion();
						}
						else{
						this.user1.update(u.$key,{
                        Equipo1: data
                        });
                 		}
					}
				}
			]
			 
		});

		alert.present(alert);
			 		 }
	}  
	
	
	
    updateEquipo2(u){ 
		if (e1==='no'){
			  let alert = this.alertCtrl.create({
              title: 'Sin Equipos',
              subTitle: 'Agrega Equipos desde la tabla general',
              buttons: ['Aceptar']
                       });
                       alert.present();
			}
		 else{
		let alert = this.alertController.create({
			title:"Actualizar Equipo:",
			message:"Actualizar",
			inputs: [

             e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18

			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
					}
				},
				{
					text: "guardar",
					handler: data => {
                        equipo2=data
						if(equipo2==undefined||equipo2==""){
							this.errorSeleccion();
						}
						else{

						this.user1.update(u.$key,{
                        Equipo2: data
                        });
						}
					}
				}
				
			]
		});
		
		alert.present(alert);
	}
	}
    
    
 borrarPartido(user1){
	 
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
          this.user1.remove(user1);
          
        }
      }
    ]
  });
  alert.present();
     
}
        
	createUser(){
		let newUserModal = this.alertController.create({
			title:"Nuevo Partido",
			message:"¿Quieres agregar un nuevo partido?",
	
			buttons:[
				{
					text :"cancelar",
					handler : data => {
					}
				},
				{
					text: "guardar",
					handler: data => {
						
						 this.user1.push({
							Equipo1: 'Local',
                            Equipo2: 'Visita',
                            Fecha: 'Fecha',
                            Hora: 'Hora',
                            Jornada: "J"+'#',
                          
                            });
                        
					}
                    
				}
				
			]
		});
		
		newUserModal.present(newUserModal);
	}
	
	
       
  	
 
	
	    
   
    
     
	 updateJornada(u){
		let updateUserModal = this.alertController.create({
			title:"Actualizar Hora:",
			message:"Actualizar Hora:"+ " "+ u.Jornada,
			inputs: [
				
                {
					name:"Jornada",
					placeholder:"Jornada" //Nombre nadamas
				}
               
			],
			buttons:[
				{
					text :"cancelar",
					handler : data => {
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user1.update(u.$key,{
                           Jornada: "J" + " " +data.Jornada
                                                        
    
						});
					}
				}
				
			]
		});
         
		
		updateUserModal.present(updateUserModal);
	}
	 
	
    
    launchLigasPage(){
        this.navCtrl.push(CanchasLogPage);
        
    }
    agregarJornada(){
        this.navCtrl.push(ResultadosPage);
        
    }
    
    updateResultado(u,user1){
	
		let updateUserModal = this.alertController.create({
			title:"Finalizar partido",
			message:"Resultado del partido"+ " "+ u.Equipo1 + " " + "vs"+ " " + u.Equipo2,
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
                            
					}
				}, 
				{
					text: "guardar",
					handler: data => {
						golequipo1=data.gol1;
						golequipo2=data.gol2;
													
						if((isNaN(data.gol1))||(isNaN(data.gol2))||golequipo1==undefined||golequipo1==""||golequipo2==undefined||golequipo2==""){
							this.errorGoles();
						}
						else{
						this.user1.update(u.$key,{
                            gol1:data.gol1,   //mande dato directooo =>  gol1:18,
                            gol2:data.gol2

						});
                        
                       }
                       

					}
                    
				}
				
			]
		});
        
		
		updateUserModal.present(updateUserModal);
    
        
      
	}
    
    
    finPartido(u,user1,user2,user3){
        setTimeout(this.mandarDato(u,user1,user2,user3) , 3000)
       
       
        
      
}
    
    
  
    
  errorSeleccion(){	
  let alert = this.alertCtrl.create({
    title: 'Error',
    message: 'Error en selección de equipos',          
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
     
          
        }
      }
    ]
  });
  alert.present();

	}
	errorGoles(){	
  let alert = this.alertCtrl.create({
    title: 'Error',
    message: 'Error en resultado del partido',          
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
     
          
        }
      }
    ]
  });
  alert.present();

	}
    
    
    
    
    
    
    
    
    
        borrarDato(u,user1,user2,user3){
         console.log ('Funcion borrarDato');
         this.user1.remove(u); 
      
}
	
	
    
    //Me quede en las funciones, siguen sin ejecutarse en su debido tiempo :S

    
    
    
    
    
    
    
    
    
       mandarDato(u,user1,user2,user3){
		   if((u.Equipo1==="Local")||(u.Equipo1==="Visita")||(u.Equipo2==="Local")||(u.Equipo2==="Visita")){
			   let alert = this.alertCtrl.create({
				title: 'Error',
				message: 'Error en Selección de equipos',
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

			
					}

				  }

				]
			  });

			  alert.present();

		   }
		   else if((u.gol1===undefined)||(u.gol2===undefined)){ ///////////////////////////////////////
			   let alert = this.alertCtrl.create({
				title: 'Error',
				message: 'Error en Goles',
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

			
					}

				  }

				]
			  });

			  alert.present();

		   }
		  
		   
		   else{
	
   let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Deseas Finalizar este partido?',
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
		 
           this.user4.push(u); 
        setTimeout( this.borrarDato(u,user1,user2,user3), 3000);
          
        }
		  
      }
		
    ]
  });
			   
  alert.present();
			   }
     
}
    
    
    
    
    
    
    /*
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
					}
				},
				{
					text: "guardar",
					handler: data => {
                        
                        
						this.user1.update(u.$key,{
                           Fecha: data.Fecha                             
						});
					}
				}
				
			]
		});
         
		
		updateUserModal.present(updateUserModal);
	}
	
	*/
 
    
    
    
    
    
    
    
    
    
 
    

}
