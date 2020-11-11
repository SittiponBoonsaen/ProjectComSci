import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-myhome-field',
  templateUrl: './myhome-field.page.html',
  styleUrls: ['./myhome-field.page.scss'],
})
export class MyhomeFieldPage implements OnInit {

  datastore;
  datafield;
  showdatastore;
  constructor(private datapass: DatapassService, private Http: HttpClient, private router: Router) {
    console.log(datapass.datastore);
    console.log(datapass.datafield);
    const dataJSON = {
      id_store:  this.datapass.idstoreformmyhome,
    };
    this.Http.post('http://localhost:5000/apiFinal/getstoreformID', JSON.stringify(dataJSON))
        .subscribe(datastore => {
          this.showdatastore = datastore;
        });
  }

  ngOnInit() {
      this.datastore = this.datapass.datastore;
      this.datafield = this.datapass.datafield;
    
  }

  clickfield(id_field: any) {
    console.log(id_field);
  }

    gotosomething() {
      const navigate = this.router.navigate(['/home/tabs/myhome/myhome-field/chartreservations']);
    }
}
