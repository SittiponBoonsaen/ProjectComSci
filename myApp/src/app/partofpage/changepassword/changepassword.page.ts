import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  password: any;
  passwordconfirm: any;
  dataUsername: any;

  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router,  private loadingController: LoadingController,public alertController: AlertController) {
    this.dataUsername = this.datapassService.userIDLogin;
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
    if (this.password === this.passwordconfirm){
      let dataUsername;
      for (dataUsername of this.dataUsername) {
      }
      const dataJSON = {
        'password_member': this.password,
        'id_member': dataUsername.id_member,
      };
      console.log(dataJSON);
      this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/usermember/changepassword', JSON.stringify(dataJSON)).subscribe(data =>{
        console.log(data);
        window.alert("แก้ไขสำเร็จ");
        const navigate = this.router.navigate(['/home/tabs/account']);
      },error => {
        console.log(error);
        window.alert("แก้ไขไม่สำเร็จ");
      });
    }else {
      window.alert("รหัสผ่านไม่ตรง");
    }
  }

}
