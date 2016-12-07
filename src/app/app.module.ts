import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

//AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBoe8jeMSKDyjMAHw7_iucICj_9TcHJV4g",
  authDomain: "my-awesome-project-351a8.firebaseapp.com",
  databaseURL: "https://my-awesome-project-351a8.firebaseio.com",
  storageBucket: "my-awesome-project-351a8.appspot.com",
  messagingSenderId: "653899334060"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
