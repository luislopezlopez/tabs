import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CanchasLogPage } from '../canchas-log/canchas-log';
import { NavController, AlertController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
@Component({
  selector: 'page-about-log',
  templateUrl: 'about-log.html',
})
export class AboutLogPage {

 arrAnuncios:any;
  ligaSelec:any
   promoDB: FirebaseListObservable<any>;
  constructor(private launchNavigator: LaunchNavigator,
			   public navCtrl: NavController, public storage: Storage,public database: AngularFireDatabase,
			   private alertCtrl: AlertController,
			   public alertController: AlertController,) { 
	  
	  
	  this.promoDB= this.database.list('PromoCantera');
 	  this.arrAnuncios=['Anuncio 1','Anuncio 2'];
  }
  
	
	
	
	
	
	
	
	
	
  ubicacion(){
   this.launchNavigator.navigate("19.027410, -98.255220");
/*
    this.launchNavigator.navigate('19.027410, -98.255220', options)
        .then(
            success => alert('Launched navigator'),
            error => alert('Error launching navigator: ' + error)
    ); 
	  
	*/  
	  

  }
	
	promo(){
		let newUserModal = this.alertController.create({
			title:"Nuevo Anuncio",
			message:"¿Quieres agregar un anuncio?",
			inputs: [
				{
					name: "Mensaje",
					placeholder :"Mensaje" 
					
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
						
						 this.promoDB.push({
							Promo: data.Mensaje
                            
                          
                            });
                        
					}
                    
				}
				
			]
		});
		
		newUserModal.present(newUserModal);
		
	}
	
	updatePromo(u){
		let alert = this.alertController.create({
			title:"Modificar:",
			message:"Modifica el anuncio",
			inputs: [
	        {
					name: "Mensaje",
					placeholder :"Mensaje" 
				}
			], 
			buttons:[
				{
					text: "Aceptar",
					handler: data => {
                    this.promoDB.update(u.$key,{
                    Promo: data.Mensaje
						});
					}
				},
				{
					text :"Cancelar",
					handler : data => {
					console.log ('cancel clic');
					}
				},
				
				{
					text :"Borrar",
					handler : data => {
					this.promoDB.remove(u); 
					}
				},
				
			]
		});
		alert.present(alert);
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	getLiga(liga){ 
		var liga=liga;
		console.log("mi liga ahora si es "+liga);
		this.ligaSelec=liga;
	}
	
	ionViewDidEnter(){
		this.storage.get('liga').then ((liga)=> {
		this.getLiga(liga);
		});

	}
	launchLigasPage(){
        this.navCtrl.push(CanchasLogPage);
        
    }
	

}
