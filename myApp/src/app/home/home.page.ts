import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatapassService} from '../datapass.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataAccount: any;

  constructor(public datapass: DatapassService, public alertController: AlertController, private router: Router) {
    this.dataAccount = this.datapass.userIDLogin;
  }

}
