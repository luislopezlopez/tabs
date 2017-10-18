

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from "../../models/profile";
//import { sesionPage } from '../sesion/sesion';
/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-log',
  templateUrl: 'perfil-log.html',
})
export class PerfilLogPage {

mail1:any
mailNew:any
@ViewChild('datePicker') datePicker;
profileData: FirebaseObjectObservable<Profile>
	perfil={
	//nombre:"",
	correo:this.mailNew,
	//nacimiento:""
};
profile = {} as Profile




  constructor( private toast: ToastController,private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
	  
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
		  console.log(data);
		  this.mailNew=data.email;
		  this.perfil={
		  //nombre:"",
		  correo:this.mailNew,
		  //nacimiento:""
		  };
        this.toast.create({
          message: `Bienvenido a Travesaño, ${data.email}`,
          duration: 3000
        }).present();
		  
		  this.profileData=this.afDatabase.object(`profile/${data.uid}`)
		  console.log(this.profileData);
      }
      else {
        this.toast.create({
          message: `No pudimos encontrar tus datos`,
          duration: 3000
        }).present();
      }
    })
	 
  }

	  crearPerfil(){
		
	this.afAuth.authState.take(1).subscribe(auth => {
		this.afDatabase.object(`profile/${auth.uid}`).update(this.perfil)
		  .then(()=> this.navCtrl.pop());
		
		
	})
}
}