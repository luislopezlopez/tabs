import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule  } from '@ionic/storage';
import { BrowserModule  } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { Push } from '@ionic-native/push'; 
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { Estadisticas } from '../pages/estadisticas/estadisticas';
import { Partidos } from '../pages/partidos/partidos';
import { ofensivaPage } from '../pages/ofensiva/ofensiva';
import { defensivaPage } from '../pages/defensiva/defensiva';
import { signPage } from '../pages/sign/sign';
import { perfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilLogPage } from '../pages/perfil-log/perfil-log';
import { TabsLogPage } from '../pages/tabs-log/tabs-log'; 
import { CanchasLogPage } from '../pages/canchas-log/canchas-log';
import { LigasLogPage } from '../pages/ligas-log/ligas-log';
import { PartidosLogPage } from '../pages/partidos-log/partidos-log';
import { ResultadosLogPage } from '../pages/resultados-log/resultados-log';
import { AboutLogPage } from '../pages/about-log/about-log';
import { EstadisticasTabLogPage } from '../pages/estadisticas-tab-log/estadisticas-tab-log';
import { sesionPage } from '../pages/sesion/sesion';
import { Ligas } from '../pages/ligas/ligas';
import { AcercadePage} from '../pages/acercade/acercade';
import { EstadisticastabPage} from '../pages/estadisticastab/estadisticastab';
import { EstadisticasLogPage} from '../pages/estadisticas-log/estadisticas-log'; 
import { ResultadosPage} from '../pages/resultados/resultados';
import { CanchasPage} from '../pages/Canchas/canchas';
import { noSeleccionPage} from '../pages/noseleccion/noseleccion';
import { bienvenidaPage} from '../pages/bienvenida/bienvenida';
import { Resultadosfirebase} from '../providers/resultadosfirebase';
import { CanchasBienvenidaPage} from '../pages/canchas-bienvenida/canchas-bienvenida';
import { LigasBienvenidaPage} from '../pages/ligas-bienvenida/ligas-bienvenida';
export const firebaseConfig = {
    apiKey: "AIzaSyA3chiVX67wTxgSUvoCdZ4r-2da7ixzy04",
    authDomain: "travesano-mx.firebaseapp.com",
    databaseURL: "https://travesano-mx.firebaseio.com/", 
    storageBucket: "travesano-mx.appspot.com",
    messagingSenderId: "701254416116"
						
};
@NgModule({
  declarations: [
    MyApp, 
    AboutPage,
    Estadisticas,
    Partidos,
    TabsPage,
    Ligas,
    AcercadePage,
    ResultadosPage,
    EstadisticastabPage,
	CanchasPage,
	noSeleccionPage,
	bienvenidaPage,
	  LigasBienvenidaPage,
	  CanchasBienvenidaPage,
	  sesionPage,
	  TabsLogPage,
	  CanchasLogPage,
	  LigasLogPage,
	  PartidosLogPage,
	  EstadisticasTabLogPage,
	  EstadisticasLogPage,
	  ResultadosLogPage,
	  AboutLogPage,
	  ofensivaPage,
      defensivaPage,
	  signPage,
	  perfilPage,
	  PerfilLogPage

	 
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement:'top'}),
	  BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
	  AngularFireAuthModule,
	  IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    Estadisticas,
    Partidos,
    TabsPage,
    Ligas,
    AcercadePage,
    ResultadosPage,
    EstadisticastabPage ,
	CanchasPage,
	noSeleccionPage,
	  bienvenidaPage,
	  LigasBienvenidaPage,
	    CanchasBienvenidaPage,
	  sesionPage,
	  TabsLogPage,
	  CanchasLogPage,
	  LigasLogPage,
	   PartidosLogPage,
	  EstadisticasTabLogPage,
	  EstadisticasLogPage,
	  ResultadosLogPage,
	  AboutLogPage,
	  ofensivaPage,
      defensivaPage,
	  signPage,
	  perfilPage,
	  PerfilLogPage 
  ],
  providers: [SplashScreen,Push,{provide: ErrorHandler, useClass: IonicErrorHandler},Resultadosfirebase,IonicStorageModule,LaunchNavigator]
})
export class AppModule {}
