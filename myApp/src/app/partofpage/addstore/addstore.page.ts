import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.page.html',
  styleUrls: ['./addstore.page.scss'],
})
export class AddstorePage implements OnInit {
  selectedamphures: any;
  mySelectamphures: any;
  mySelectprovince: any;
  selectedprovince: any;

  constructor(private Http: HttpClient, private datapass: DatapassService, public alertController: AlertController, private router: Router) {
    this.selectedprovince = this.datapass.selectedprovince;
  }

  ngOnInit() {
  }
  selectedprovincemethod(select: any) {
    console.log(select);
    const dataJSON = {
      'PATIENT_ID': select,
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/amphures', JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selectedamphures = data;
          console.log(this.selectedamphures);
        });
  }

  selectedamphuresmethod(mySelectamphures: any) {
    console.log(mySelectamphures);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'คุณต้องการที่จะเพิ่มหรือไม่ ?',
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

  goAccount() {

  }
}
