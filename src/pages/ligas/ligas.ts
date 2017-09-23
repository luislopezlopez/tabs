import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
export var tablaConc;
export var rollConc;
export var resultadosConc;
export var liga;

var tabla="/Tabla ";
var roll="/Roll "
var resultados= "/Resultados "

    liga= "jeje";
	tablaConc="jeje";
    rollConc="jeje";
    resultadosConc="jeje";


@Component({
  selector: 'Ligas',
  templateUrl: 'ligas.html'
})
export class Ligas {

   arrLigas:any; 
   ligas: FirebaseListObservable<any>; 
   user: FirebaseListObservable<any>;
  	constructor(public navCtrl: NavController, public navParams: NavParams,
				 	public alertController: AlertController,
				    private alertCtrl: AlertController,
				 	public database: AngularFireDatabase, 
				    public storage: Storage
				) {
	
		this.arrLigas=[];
        this.ligas= this.database.list('BDLigas', {
        preserveSnapshot: true,
    
  });
		 
				this.user= this.database.list('BDLigas');

  }		
	


nuevaLiga(){ // LIGA PARA LA CANTERA!!!! , DEBO HACER OTRO PARA OTRO TORNEO OK?
		let newUserModal = this.alertController.create({
			title:"Nueva Liga",
			message:"Agrega aquí nombre de liga",
			inputs: [
				{
					name: "Liga",
					placeholder :"Liga"
				}
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
						
						this.user.push({
							Liga: data.Liga,  
							
						});
                   
           
					}
				}
				
			]
		});
		
		newUserModal.present(newUserModal);
	}


    seleccionLiga(u){
	liga= u.Liga;
	tablaConc=tabla+u.Liga;
    rollConc=roll+u.Liga;
    resultadosConc=resultados+u.Liga;
    console.log(tablaConc);console.log(rollConc);console.log(resultadosConc);
	this.storage.set('liga',liga);
	this.storage.set('tablaConc',tablaConc);
	this.storage.set('rollConc',rollConc);
	this.storage.set('resultadosConc',resultadosConc);
    this.navCtrl.pop(); 
	this.navCtrl.pop(); 	
	//this.navCtrl.setRoot(TabsPage);
	}




}