import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-editfield',
  templateUrl: './editfield.page.html',
  styleUrls: ['./editfield.page.scss'],
})
export class EditfieldPage implements OnInit {
  idstore: any;
  datafield: any;

  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router,  private loadingController: LoadingController,public alertController: AlertController) {
    this.idstore = this.datapassService.idstoreformmanagestore;
    const dataJSON = {
      id_store: this.idstore,
    };
    this.Http.post('http://localhost:5000/apiFinal/getingfield', JSON.stringify(dataJSON))
        .subscribe(datastore => {
          this.datafield = datastore;
          console.log(this.datafield);
        });
  }

  ngOnInit() {
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'คุณต้องการที่จะแก้ไขหรือไม่ ?',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            const navigate = this.router.navigate(['/login']);
            this.summit();
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
  summit(){
    let iddatafield;
    for (iddatafield of this.datafield) {
    }
    let inputname_field = (<HTMLInputElement>document.getElementById('name_field')).value;
    let inputsize_field = (<HTMLInputElement>document.getElementById('size_field')).value;
    let inputprice_field = (<HTMLInputElement>document.getElementById('price_field')).value;
    let inputstatus_field = (<HTMLInputElement>document.getElementById('status_field')).value;

    const dataJSON = {
      'name_field': inputname_field,
      'size_field': inputsize_field,
      'price_field': inputprice_field,
      'status_field': inputstatus_field,
      'id_field': iddatafield.id_field,
    };

    console.log(dataJSON);
    this.Http.post('http://localhost:5000/apiFinal/field/edit', JSON.stringify(dataJSON)).subscribe(data =>{
      console.log(data);
      window.alert("แก้ไขสนามสำเร็จ");
      const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
    },error => {
      console.log(error);
      window.alert("แก้ไขสนามไม่สำเร็จ");
    });
  }

}
