import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-editstore',
  templateUrl: './editstore.page.html',
  styleUrls: ['./editstore.page.scss'],
})
export class EditstorePage implements OnInit {
  idstore: any;
  datastore: any;
  private dataUser: any;
  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router,  private loadingController: LoadingController,  public alertController: AlertController) {
    this.dataUser = this.datapassService.userIDLogin;
    this.idstore = this.datapassService.idstoreformmanagestore;
    const dataJSON = {
      "id_store": this.idstore
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getstoreformID', JSON.stringify(dataJSON))
        .subscribe(datastore => {
              this.datastore = datastore;
              console.log(this.datastore);
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
    let iddatastore;
    for (iddatastore of this.datastore) {
    }
    let inputnamestore = (<HTMLInputElement>document.getElementById('name_store')).value;
    let inputaddress = (<HTMLInputElement>document.getElementById('address_store')).value;
    let inputtelephone = (<HTMLInputElement>document.getElementById('telephone_store')).value;
    let inputrulestore = (<HTMLInputElement>document.getElementById('rules_store')).value;
    let inputstatus_store = (<HTMLInputElement>document.getElementById('exampleFormControlSelect1')).value;

    const dataJSON = {
      'name_store': inputnamestore,
      'address_store': inputaddress,
      "telephone_store": inputtelephone,
      "rules_store": inputrulestore,
      'status_store': inputstatus_store,
      "id_store": iddatastore.id_store
    };
    console.log(dataJSON);
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/store/edit', JSON.stringify(dataJSON)).subscribe(data =>{
      console.log(data);
      window.alert("แก้ไขร้านสำเร็จ");
      const navigate = this.router.navigate(['/home/tabs/account/managestore']);
    },error => {
      console.log(error);
      window.alert("แก้ไขร้านไม่สำเร็จ");
    });
  }
}
