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

  mySelectamphures: any;
  mySelectprovince: any;
  mySelectdistricts: any;

  selectedprovince: any;
  selecteddistricts: any;
  selectedamphures: any;

  address: any;
  otheraddress: any;
  namestore: any;
  telephone: any;
  rulestore: any;
  dataUsername: any;
  status_store: any;

  constructor(private Http: HttpClient, private datapass: DatapassService, public alertController: AlertController, private router: Router) {
    this.selectedprovince = this.datapass.selectedprovince;

  }

  ngOnInit() {
  }
  selectedprovincemethod(select: any) {
    const dataJSON = {
      'PATIENT_ID': this.mySelectprovince.value,
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/amphures', JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selectedamphures = data;
          console.log(this.selectedamphures);
        });
  }

  selectedamphuresmethod(mySelectamphures: any) {
    console.log(mySelectamphures);
    const dataJSON = {
      'PATIENT_ID': this.mySelectamphures.value,
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/districts', JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selecteddistricts = data;
          console.log(this.selectedamphures);
        });
  }

  selecteddistrictsmethod(mySelectdistricts: any) {
    this.mySelectdistricts = mySelectdistricts;

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
    this.address = this.otheraddress + " ต." + this.mySelectdistricts + " อ." + this.mySelectamphures.name + " จ." + this.mySelectprovince.name;
    this.dataUsername = this.datapass.userIDLogin;
    let ownerid;
    for (ownerid of this.dataUsername) {
    }
    const dataJSON = {
      'name_store': this.namestore,
      'address_store': this.address,
      "telephone_store": this.telephone,
      "rules_store": this.rulestore,
      "owner_store": ownerid.id_member,
      'status_store':this.status_store
    };

    console.log(dataJSON);
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/store/add', JSON.stringify(dataJSON)).subscribe(data =>{
      console.log(data);
      window.alert("เพิ่มร้านสำเร็จ");
      const navigate = this.router.navigate(['/home/tabs/account/managestore']);
    },error => {
      console.log(error);
      window.alert("เพิ่มร้านไม่สำเร็จ");
    });
  }
}
