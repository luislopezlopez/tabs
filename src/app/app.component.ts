// checkpoint, me falta hacer el storage en estadisticas
// me falta hacer la logica para la pagina de bienvenida se pueda seleccionar las ligas y automaticamente cerrar las pantallas anteriores y dejar activa la root page.....


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController} from 'ionic-angular'; 
import { TabsPage } from '../pages/tabs/tabs';
import { TabsLogPage } from '../pages/tabs-log/tabs-log';
import { AcercadePage } from '../pages/acercade/acercade';
import { Partidos } from '../pages/partidos/partidos';
import { sesionPage } from '../pages/sesion/sesion';
import { bienvenidaPage } from '../pages/bienvenida/bienvenida';
import { Storage } from '@ionic/storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
@Component({ 
	selector: 'my-page',
  templateUrl: 'app.html'
})
export class MyApp {
  sesionMenu:any
   edoSesion:any
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  constructor(private splashScreen: SplashScreen,public alertCtrl: AlertController,public push: Push,public platform: Platform, public storage: Storage,public events: Events) {
	  
	  
	  
	  events.subscribe('estado', (estado) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
		  this.edoSesion=estado;
  });
	  
	   this.pushSetup();
    this.initializeApp();
    this.pages = [
      { title: 'Inicio', component: Partidos},
      { title: 'Acerca de', component: AcercadePage },
	  
    ];
  }
   openPage(page) {
	   if(page==Partidos){
	   }
	   if(page.component==AcercadePage){
		 this.nav.push(AcercadePage);	  
	   }
	   if(page.component==sesionPage){
		 this.nav.push(sesionPage);	  
	   }
	  
  }

	initializeApp() {

	this.storage.get('liga').then ((liga)=> {

		if(liga==null){
			this.nav.setRoot(bienvenidaPage);
			 this.splashScreen.hide();  
		}
		 else {
		
			this.sesion();  
		 }
		  
		});
	   
	  
	  }
    
   sesion(){
	  this.storage.get('sesion').then ((sesion)=> { 
			if(sesion=="iniciada") {
				this.events.publish('estado', "Cerrar Sesión");
				this.nav.setRoot(TabsLogPage);
				this.splashScreen.hide(); 
					}
		    else if(sesion==null)  
				{
			   this.events.publish('estado', "Iniciar Sesión");
			   this.nav.setRoot(TabsPage);
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
		this.initializeApp();
				
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
		    else if(sesion==null)  
				{
			   this.nav.push(sesionPage);
				}
		  
		  });  
	}
		

     
   
   
   
   
   
   
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
   
   
   
   
  }


