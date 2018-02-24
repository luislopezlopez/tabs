import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {User } from "../../models/user";
import { perfilPage } from '../perfil/perfil'; 
import { AngularFireDatabase } from 'angularfire2/database';
//import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the SignPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class signPage {
	
	name:any
	apellido:any
	 mail:any
  password: any
	password0:any
  user={} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
			  public alertController: AlertController,afd: AngularFireDatabase, private afAuth: AngularFireAuth,
			  private afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }
	
	async register(user:User){
		
		var dominio= user.email.split("@")[1];
		if(dominio=="travesano.com"){
			let alert = this.alertCtrl.create({
				title: 'Error',
				message: 'No se puede crear esta cuenta',
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
		
		else if(this.user.password===this.password0){
		
			try{
				const result=await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
					if(result){
						console.log(result);
						this.navCtrl.setRoot(perfilPage);
							  }
				}
			catch (e) {
      		if(e.code=="auth/invalid-email"){
				let alert = this.alertCtrl.create({
				title: 'Error',
				message: 'Correo Inválido',
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
				else if(e.code=="auth/weak-password"){
				let alert = this.alertCtrl.create({
				title: 'Error',
				message: 'La contraseña debe contener al menos 6 caracteres',
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
					   }
		}
		
		
		else{
			let alert = this.alertCtrl.create({
				title: 'Error',
				message: 'Las contraseñas no coinciden',
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
		
		
	}
	

}
