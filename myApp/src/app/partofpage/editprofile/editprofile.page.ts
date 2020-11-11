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
  }

  ngOnInit() {
  }

  editprofile(){
    let inputfirstname = (<HTMLInputElement>document.getElementById('firstname_member')).value;
    let inputlasname = (<HTMLInputElement>document.getElementById('lasname_member')).value;
    let inputaddress = (<HTMLInputElement>document.getElementById('address_member')).value;
    let inputtelephone = (<HTMLInputElement>document.getElementById('telephone_member')).value;
    const dataJSON = {
      'firstname_member': inputfirstname,
      'lasname_member': inputlasname,
      'address_member':  inputaddress,
      'telephone_member': inputtelephone,
      'id_member': this.id_member
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/usermember/edit', JSON.stringify(dataJSON))
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
      message: 'คุณต้องการที่จะแก้ไขระบบจะเด้งไปหน้าLogin ?',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            this.editprofile();
            console.log('Confirm Okay');
            const navigate = this.router.navigate(['/home/tabs/account']);
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


    gochangepassword() {
      const navigate = this.router.navigate(['/home/tabs/account/editprofile/changepassword']);
    }
}
