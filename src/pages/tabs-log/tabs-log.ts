import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PartidosLogPage } from '../partidos-log/partidos-log';
import { AboutLogPage } from '../about-log/about-log';
import { EstadisticasTabLogPage } from '../estadisticas-tab-log/estadisticas-tab-log';

/**
 * Generated class for the TabsLogPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs-log',
  templateUrl: 'tabs-log.html'
})

export class TabsLogPage {

  tab1Root: any = PartidosLogPage;
  tab2Root: any = EstadisticasTabLogPage;
  tab3Root: any = AboutLogPage;


  constructor(public navCtrl: NavController) {}

}
