import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DatapassService} from '../datapass.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  valuedegree: any;


  constructor(private Http: HttpClient, private router: Router, public datapassService: DatapassService) { }

  ngOnInit() {
    this.Http.get('http://localhost/apiFinal/getstore')
        .subscribe(data => {
          this.datapassService.datastore = data;
        });
    this.Http.get<any[]>('http://localhost/apiFinal/province')
        .subscribe(data => {
          this.datapassService.selectedprovince = data;
        });
  }


  login() {
    let dataJSON = {
      'username_member': this.username,
      'password_member': this.password,
      'status_member': this.valuedegree
    };
    console.log(dataJSON);
    this.Http.post('http://localhost/apiFinal/usermember/login',JSON.stringify(dataJSON)).subscribe(data =>{
      console.log("login complete");
      let navigate = this.router.navigate(['/home']);
      console.log(data);
      // this.datapassService = this.data;
    },error => {
      let navigate = this.router.navigate(['/login']);
      console.log("login error");
      window.alert("login fail");
    });
  }

  segmentChanged(valuedegree: any) {
    console.log(valuedegree);
  }
}
