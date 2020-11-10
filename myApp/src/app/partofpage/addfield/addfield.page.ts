import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {Camera} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addfield',
  templateUrl: './addfield.page.html',
  styleUrls: ['./addfield.page.scss'],
})
export class AddfieldPage implements OnInit {
  idstore_field: any;
  name_field: any;
  size_field: any;
  service_field: any;
  price_field: any;
  status_field: any;
  file_image: any;

  constructor(private camera: Camera, public alertController: AlertController, private router: Router,  private datapassService: DatapassService, private Http: HttpClient) { }

  ngOnInit() {
    this.idstore_field = this.datapassService.idstoreformmanagestore;
  }
  addfield(){
    const dataJSON = {
      id_store_field: this.idstore_field,
      name_field: this.name_field,
      service_field: this.service_field,
      size_field: this.size_field,
      price_field: this.price_field,
      status_field: this.status_field
    };
    console.log(dataJSON);
    this.Http.post('http://localhost:5000/apiFinal/field/add', JSON.stringify(dataJSON))
        .subscribe(data => {
          console.log(data);
        });

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
            this.addfield();
            window.alert("เพิ่มข้อมูลสำเร็จ");
            const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
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
