import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-managefield',
  templateUrl: './managefield.page.html',
  styleUrls: ['./managefield.page.scss'],
})
export class ManagefieldPage implements OnInit {
  datafield: any;
  idstore: any;
  id_Field: any;
  loading: any;
  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router, public alertController: AlertController,  private loadingController: LoadingController) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.loading = await this.loadingController.create({
      message: 'รอสักครู่...',
    });
    this.idstore = this.datapassService.idstoreformmanagestore;
    const dataJSON = {
      id_store: this.idstore,
    };
    this.Http.post('http://localhost:5000/apiFinal/getingfield', JSON.stringify(dataJSON))
        .subscribe(datastore => {
          this.datafield = datastore;
          this.loading.dismiss();
          console.log(this.datafield);
        });
    this.loading.present();
  }
  goToAddfield() {
    const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield/addfield']);
  }

  gotoEdit() {
    const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield/editfield']);
  }

  gotoDelete() {
    const dataJSON = {
      "id_field": this.id_Field,
    };
    console.log(dataJSON);
    this.Http.post('http://localhost:5000/apiFinal/field/delete', JSON.stringify(dataJSON))
        .subscribe(data => {
          console.log(data);
        });
  }

  async presentAlertConfirm(idfield) {
    console.log(idfield);
    this.id_Field = idfield;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'คุณต้องการที่จะลบหรือไม่ ?',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            this.gotoDelete();
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
}
