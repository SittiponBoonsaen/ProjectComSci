import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  public image: any;
  captureDataUrl: any;
  dataUser: any;
  firstname_member: any;
  lasname_member: any;
  password_member: any;
  confirmpassword: any;
  address_member: any;
  telephone_member: any;
  id_member: any;

  constructor(private camera: Camera, public alertController: AlertController, private router: Router,  private datapass: DatapassService, private Http: HttpClient) {
    this.dataUser = this.datapass.userIDLogin;
    console.log(this.dataUser);
  }

  ngOnInit() {
  }

  editprofile(){

    const dataJSON = {
      password_member: this.password_member,
      firstname_member: document.getElementById('firstname_member').value,
      lasname_member: document.getElementById('lasname_member').value,
      address_member:  document.getElementById('address_member').value,
      telephone_member: document.getElementById('telephone_member').value,
      id_member: this.id_member
    };
    console.log(dataJSON);
    this.Http.post('http://localhost:5000/apiFinal/usermember/edit', JSON.stringify(dataJSON))
        .subscribe(data => {
          console.log(data);
          const navigate = this.router.navigate(['/login']);
        });

  }

  async presentAlertConfirm(id_member) {
    this.id_member = id_member;
    console.log(this.id_member);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'คุณต้องการที่จะแก้ไขหรือไม่ ?',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            this.editprofile();
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
    const navigate = this.router.navigate(['']);
  }
}
