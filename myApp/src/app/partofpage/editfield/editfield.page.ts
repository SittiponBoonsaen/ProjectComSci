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
  idfield: any;
  datafield: any;

  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router,  private loadingController: LoadingController,public alertController: AlertController) {
    this.idfield = this.datapassService.idfieldformmanagefield;
    const dataJSON = {
      'id_field': this.idfield,
    };
    this.Http.post('http://localhost:5000/apiFinal/getfieldformID', JSON.stringify(dataJSON))
        .subscribe(datafield => {
          this.datafield = datafield;
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
    let inputname_field = (<HTMLInputElement>document.getElementById('namefield')).value;
    let inputsize_field = (<HTMLInputElement>document.getElementById('sizefield')).value;
    let inputprice_field = (<HTMLInputElement>document.getElementById('pricefield')).value;
    let inputstatus_field = (<HTMLInputElement>document.getElementById('statusfield')).value;
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
      const navigate = this.router.navigate(['/home/tabs/managestore/managefield']);
    },error => {
      console.log(error);
      window.alert("แก้ไขสนามไม่สำเร็จ");
    });
  }

    gotodiscount() {
      const navigate = this.router.navigate(['/home/tabs/managestore/managefield/editfield/discount']);
    }
}
