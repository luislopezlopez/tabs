import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CanchasLogPage } from '../canchas-log/canchas-log';
import { Nav } from 'ionic-angular'; 
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';


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
  user:any
  password: any
  constructor(public navCtrl: NavController, public navParams: NavParams,afd: AngularFireDatabase,public storage: Storage,public events: Events) {
  }

  ionViewDidLoad() {
    firebase.auth().signOut().then(function() {
 
   }, function(error) {
  // An error happened.
   });
  }
	
	login() {
    firebase.auth().signInWithEmailAndPassword(this.user,this.password).then(() => {
	    
		this.navCtrl.push(CanchasLogPage);
		
    }).catch((err) => {
      alert('Login failed' + err);
    })
  }
	
	create(){
		firebase.auth().createUserWithEmailAndPassword('1@g.com', '111111')
	}

}
