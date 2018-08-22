import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//HTTP Request
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';



//Bluetooth
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

//Autenticação
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';

//Storage
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
//import { Storage } from '@ionic/storage';




//Configurações do app no firebase
var config = {
  apiKey: "AIzaSyDQb13fMSrnCrM9Ak_6IGzigwYj1x-1QsE",
  authDomain: "app-jornalismo.firebaseapp.com",
  databaseURL: "https://app-jornalismo.firebaseio.com",
  projectId: "app-jornalismo",
  storageBucket: "",
  messagingSenderId: "1044381464368"
};

//Páginas do aplicativo
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CriarcontaPage } from '../pages/criarconta/criarconta';
import { ResetarsenhaPage } from '../pages/resetarsenha/resetarsenha';
import { AutenticacaoPage } from '../pages/autenticacao/autenticacao';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { CriarQuestionarioPage } from '../pages/criar-questionario/criar-questionario';
import { EditarQuestaoPage } from '../pages/editar-questao/editar-questao';
import { MeusQuestionariosPage } from '../pages/meus-questionarios/meus-questionarios';
import { QuestionarioAtivoPage } from '../pages/questionario-ativo/questionario-ativo';
import { RespostasPage } from '../pages/respostas/respostas';
import { TextoPage } from '../pages/texto/texto';

//Providers
import { AuthProvider } from '../providers/auth/auth';
import { ModelQuestionarioProvider } from '../providers/model-questionario/model-questionario';
import { ToastAlertProvider } from '../providers/toast-alert/toast-alert';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CriarcontaPage,
    ResetarsenhaPage,
    AutenticacaoPage,
    PesquisaPage,
    CriarQuestionarioPage,
    EditarQuestaoPage,
    MeusQuestionariosPage,
    QuestionarioAtivoPage,
    RespostasPage,
    TextoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CriarcontaPage,
    ResetarsenhaPage,
    AutenticacaoPage,
    PesquisaPage,
    CriarQuestionarioPage,
    EditarQuestaoPage,
    MeusQuestionariosPage,
    QuestionarioAtivoPage,
    RespostasPage,
    TextoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    BluetoothSerial,
    HttpModule,
    HTTP,
    //Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    NativeStorage,
    ModelQuestionarioProvider,
    ToastAlertProvider
  ]
})
export class AppModule {}
