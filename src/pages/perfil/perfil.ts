
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from "../../models/profile";
import { CanchasBienvenidaPage } from '../canchas-bienvenida/canchas-bienvenida';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class perfilPage {

mailNew:any
nombre:any
nombre1:any

@ViewChild('datePicker') datePicker;
profileData: FirebaseObjectObservable<Profile>
perfil={

	correo:this.mailNew,
};
profile = {} as Profile




  constructor( private toast: ToastController,private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private afDatabase:AngularFireDatabase) {
  }

crearPerfil(){

	this.afAuth.authState.take(1).subscribe(auth => {
		this.afDatabase.object(`profile/${auth.uid}`).set(this.perfil)
		  .then(()=> this.navCtrl.setRoot(CanchasBienvenidaPage));
	})
}

  ionViewDidLoad() {
	  
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
		  console.log(data.email+data.uid);
		  this.mailNew=data.email;
		  console.log(this.mailNew);
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
      }
      else {
        this.toast.create({
          message: `No pudimos encontrar tus datos`,
          duration: 3000
        }).present();
      }
    })
	 
  }

	  
}