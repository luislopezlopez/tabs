import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CanchasBienvenidaPage } from '../canchas-bienvenida/canchas-bienvenida';
//import { TabsPage} from '../tabs/tabs';
import { signPage } from '../sign/sign';
//import { perfilPage } from '../perfil/perfil';
import { CanchasLogPage } from '../canchas-log/canchas-log';
import { Nav } from 'ionic-angular'; 
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {User } from "../../models/user";
import {  AlertController } from 'ionic-angular';
import { perfilPage } from '../perfil/perfil'; 

/**
 * Generated class for the SesionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sesion',
  templateUrl: 'sesion.html',
})
export class sesionPage {
  @ViewChild(Nav) nav: Nav;
  
  user={} as User;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams,public storage: Storage,public events: Events, private afAuth: AngularFireAuth) {
	  this.afAuth.auth.signOut().then(function() {
       this.nav.setRoot(sesionPage);
}).catch(function(error) {
     
});
  }

  ionViewDidLoad() {
    firebase.auth().signOut().then(function() {
 
   }, function(error) {
  // An error happened.
   });
  }
	
	async login(user:User) {
		
	var dominio= user.email.split("@")[1];
		try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
		  	if (dominio=="travesano.com"){
			this.storage.set('sesion',"iniciadaAdmin");
            this.events.publish('estado', "Cerrar Sesión");
			this.navCtrl.push(CanchasLogPage);
				
			}
		  else if(dominio!="travesano.com"){
            this.storage.set('sesion',"iniciada");
            this.events.publish('estado', "Cerrar Sesión");
			this.navCtrl.push(CanchasBienvenidaPage);
			  }
      } 
		
	   
    }
    catch (e) {
      if(e){
			  let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Error de Autenticación',
              buttons: ['Aceptar']
                       });
                       alert.present();
			}
		
		}
   
	}
   
   
   
	 
   authState(){

	   
   }

   
   contraseñaRes(){
		firebase.auth().sendPasswordResetEmail('luisenrique.lopez01@gmail.com') 
	}
   
   
   
   loginFb(){
	let provider = new firebase.auth.FacebookAuthProvider();
	   
	   firebase.auth().signInWithRedirect(provider).then(()=>{
		   
		   firebase.auth().getRedirectResult().then((result)=>{
			   this.storage.set('sesion',"iniciada");
               this.events.publish('estado', "Cerrar Sesión");
			   
			   var user=result.user;
			   console.log(user.displayName);
			   console.log(user.email);  
			   
			   this.navCtrl.push(perfilPage);
            

			   //alert(JSON.stringify(result));
		   }).catch(function(error){
			   alert(JSON.stringify(error))
		   });
						   
	   })
	                                                                     
   }
   
   crear(){
	   this.navCtrl.push(signPage);
   }

  }
