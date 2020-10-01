import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';


@Component({
  selector: 'app-myhome-field',
  templateUrl: './myhome-field.page.html',
  styleUrls: ['./myhome-field.page.scss'],
})
export class MyhomeFieldPage implements OnInit {

  datastore;
  datafield;
  constructor(private datapass: DatapassService) {
    console.log("--");
    console.log(datapass.datastore);
    console.log("--");
    console.log(datapass.datafield);
  }

  ngOnInit() {
      this.datastore = this.datapass.datastore;
      this.datafield = this.datapass.datafield;
  }


  clickfield(id_field: any) {
    console.log(id_field);
  }

}
