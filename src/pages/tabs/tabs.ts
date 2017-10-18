import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Partidos } from '../partidos/partidos';
import { AboutPage } from '../about/about';
import { EstadisticastabPage } from '../estadisticastab/estadisticastab';

@Component({
    selector: 'page-page1',
    templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Partidos;
  tab2Root: any = EstadisticastabPage;
  tab3Root: any = AboutPage;

  constructor( public navCtrl: NavController,) {

  }
   


	 
}
