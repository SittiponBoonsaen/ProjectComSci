import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  dataAccount;
  constructor(private datapass: DatapassService) { }

  ngOnInit() {
    this.dataAccount = this.datapass.userIDLogin;
  }

}
