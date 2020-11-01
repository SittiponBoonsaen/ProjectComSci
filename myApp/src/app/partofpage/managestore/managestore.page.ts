import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-managestore',
  templateUrl: './managestore.page.html',
  styleUrls: ['./managestore.page.scss'],
})
export class ManagestorePage implements OnInit {
  dataUsername: any;
  dataStore: any;
  constructor(public datapassService: DatapassService, private Http: HttpClient) { }

  ngOnInit() {
    this.dataUsername = this.datapassService.userIDLogin;
    this.dataStore = this.datapassService.datastore;
    let ownerid;
    for (ownerid of this.dataUsername) {
      }
    const dataJSON = {
      owner_store: ownerid.id_member,
    };
    this.Http.post('http://localhost:5000/apiFinal/getOwnerstore', JSON.stringify(dataJSON))
        .subscribe(datastore => {
          this.datapassService.datastoreowner = datastore;
          console.log(datastore);
        });
  }

}
