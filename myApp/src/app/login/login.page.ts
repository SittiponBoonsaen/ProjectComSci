import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DatapassService} from '../datapass.service';
import {IonRouterOutlet, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  valuedegree: any;
  loading: any;
  loading2: any;
  constructor(private Http: HttpClient, private router: Router, public datapassService: DatapassService, private routerOutlet: IonRouterOutlet, private loadingController: LoadingController) {

  }
  ngOnInit() {
    this.routerOutlet.swipeGesture = false;
    this.Http.get<any[]>('https://jongsanamcsmsu.000webhostapp.com/apiFinal/province')
        .subscribe(data => {
          this.datapassService.selectedprovince = data;
          console.log(data);
        });
  }
  async ionViewWillEnter() {
    this.loading = await this.loadingController.create({
      message: 'กำลังโหลดข้อมูล...',
    });
    this.Http.get('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getstore')
        .subscribe(data => {
          this.datapassService.datastore = data;
          console.log(data);
          this.loading.dismiss();
        });
    this.loading.present();
  }

  async login() {
    this.loading2 = await this.loadingController.create({
      message: 'กำลังเข้าสู่ระบบ...',
    });
    let dataJSON = {
      'username_member': this.username,
      'password_member': this.password,
      'status_member': this.valuedegree
    };
    this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/usermember/login',JSON.stringify(dataJSON)).subscribe(data =>{
      this.loading2.dismiss();
      console.log("login complete");
      this.router.setUpLocationChangeListener();
      let navigate = this.router.navigate(['/home']);
      console.log(data);
      this.datapassService.userIDLogin = data;

    },error => {
      let navigate = this.router.navigate(['/login']);
      console.log("login error");
      window.alert("login fail");
    });
    this.loading2.present();
  }

  segmentChanged(valuedegree: any) {
  }
}
