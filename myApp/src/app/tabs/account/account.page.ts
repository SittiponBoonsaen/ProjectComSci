import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  dataAccount;
  constructor(private datapass: DatapassService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.dataAccount = this.datapass.userIDLogin;
  }
  // ทำที่อยู่สนามและร้านค้า
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'คุณต้องการออกจากระบบใช่ไหม ?',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            const navigate = this.router.navigate(['/login']);
            console.log('Confirm Okay');
          }
        }, {
          text: 'ไม่',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  goTosettingprofile() {
    const navigate = this.router.navigate(['/home/tabs/account/editprofile']);
  }

  goTomanageStore() {
    const navigate = this.router.navigate(['/home/tabs/account/managestore']);
  }
}
