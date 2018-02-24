import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController} from 'ionic-angular'; 
import { TabsPage } from '../pages/tabs/tabs';
import { TabsLogPage } from '../pages/tabs-log/tabs-log';
import { AcercadePage } from '../pages/acercade/acercade';
import { Partidos } from '../pages/partidos/partidos';
import { sesionPage } from '../pages/sesion/sesion';
//import { perfilPage } from '../pages/perfil/perfil';
//import { bienvenidaPage } from '../pages/bienvenida/bienvenida';
import { Storage } from '@ionic/storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
//import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { PerfilLogPage } from '../pages/perfil-log/perfil-log';

@Component({ 
	selector: 'my-page',
  templateUrl: 'app.html'
})
export class MyApp {
  sesionMenu:any
   edoSesion:any
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  constructor(private splashScreen: SplashScreen,public alertCtrl: AlertController,public push: Push,public platform: Platform, public storage: Storage,public events: Events, private afAuth: AngularFireAuth) {

	  events.subscribe('estado', (estado) => {
	  this.edoSesion=estado;
		});
	  
	//this.pushSetup();
    this.initializeApp();

    this.pages = [
      { title: 'Inicio', component: Partidos},
      //{ title: 'Acerca de', component: AcercadePage },
	  //{ title: 'Modo Administrador', component: AcercadePage },
	  { title: 'Perfil', component: PerfilLogPage }
	  
    ];
  }
   openPage(page) {
	   if(page==Partidos){
	   }
	   else if(page.component==AcercadePage){
		 this.nav.push(AcercadePage);	  
	   }
	   else if(page.component==sesionPage){
		 this.nav.push(sesionPage);	  
	   }
	  else if(page.component==PerfilLogPage){
		 this.nav.push(PerfilLogPage);	  
	   }
	  
  }
	


	initializeApp() {
		

	this.storage.get('liga').then ((liga)=> {
		if(liga==null){
			//this.events.publish('estado', "Iniciar Sesión");
			this.nav.setRoot(sesionPage);
			 this.splashScreen.hide(); 
			console.log("quito splash!");
		}
		 else {
		
			this.sesion();  
		 }
		  
		});
	   
	  
	  }
    
   sesion(){
	  this.storage.get('sesion').then ((sesion)=> { 
		  console.log(sesion);
		  	if(sesion=="iniciada") {
				this.events.publish('estado', "Cerrar Sesión");
				this.nav.setRoot(TabsPage);
				this.splashScreen.hide(); 
					}
		  else if(sesion=="iniciadaAdmin") {
				this.events.publish('estado', "Cerrar Sesión");
				this.nav.setRoot(TabsLogPage);
				this.splashScreen.hide(); 
					}
		    else   
				{
			   this.nav.setRoot(sesionPage);
			   //this.events.publish('estado', "Iniciar Sesión");
			   //this.nav.setRoot(TabsPage);
			   this.splashScreen.hide(); 

				}
			  
		  });  
	   }
	
	
	
	cerrarSesion(){
		
		let alert = this.alertCtrl.create({
        title: 'Cerrar Sesión',
    message: '¿Seguro que quieres cerrar sesión?',
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
			
			this.storage.get('sesion').then ((sesion)=> {
		this.events.publish('estado', "Iniciar Sesión");		
        this.storage.remove('sesion');
		 this.storage.remove('liga');		
		//this.initializeApp();
		this.nav.setRoot(sesionPage);		
this.afAuth.auth.signOut().then(function() {
       this.nav.setRoot(sesionPage);
}).catch(function(error) {
     
});
				
		});

        }
      }
    ]
  });
  alert.present();
		
		
	}
	
	inicioSesion(){
		this.storage.get('sesion').then ((sesion)=> { 
			if(sesion=="iniciada") {
				this.cerrarSesion();
					}
			if(sesion=="iniciadaAdmin") {
				this.cerrarSesion();
					}
			if(sesion=="iniciadaFB") {
				this.cerrarSesion();
					}
		    else if(sesion==null)  
				{
			   this.nav.push(sesionPage);
				}
		  
		  });  
	}
		

     
   /*cerrarSesionFB(){
	
	   this.afAuth.auth.signOut().then(function() {
       console.log("sali de facebook");
}).catch(function(error) {
       console.log("no pude salir de facebook");
});
   }*/
   
   
   
   
  /* 
   pushSetup(){
	
	// to initialize push notifications

const options: PushOptions = {
   android: {
	   
       senderID: '815685726533',
	   vibrate: 'true',
	   forceShow:'true'
	   //badge: true,
	   //sound: 'default'
	   
   },
   ios: {
       alert: 'true',
       badge: true,
       sound: 'true'
   },
   windows: {}
};

const pushObject: PushObject = this.push.init(options);

pushObject.on('notification').subscribe((notification: any) => {
	if (notification.additionalData.foreground){
		let youralert=this.alertCtrl.create({
			title: notification.title,
			message:notification.message
			
		});
		
		
		youralert.present();
	}
	
	
});

//pushObject.on('registration').subscribe((registration: any) => alert('Device registered' + registration));

//pushObject.on('error').subscribe(error => alert('Error with Push plugin'+ error));
	
	
	
}
   
   */
   
   
  }



