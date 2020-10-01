import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';


@Component({
  selector: 'app-myhome-field',
  templateUrl: './myhome-field.page.html',
  styleUrls: ['./myhome-field.page.scss'],
})
export class MyhomeFieldPage implements OnInit {


  constructor(private datapass: DatapassService) {
    console.log("--");
    console.log(datapass.datastore);
    console.log("--");
    console.log(datapass.datafield);
  }

  ngOnInit() {

  }


  clickfield(id_field: any) {
    
  }
}
