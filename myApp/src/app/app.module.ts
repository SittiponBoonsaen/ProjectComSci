import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClient , HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {PipesModule} from './pipes/pipes.module';
import {NavController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, InputTextModule,
    TableModule, ButtonModule, RatingModule, PipesModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient , HttpClientModule,
    FormsModule,
    NavController,
    LocalNotifications,
    Camera,
    NgbModal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient ]
  }
});
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
