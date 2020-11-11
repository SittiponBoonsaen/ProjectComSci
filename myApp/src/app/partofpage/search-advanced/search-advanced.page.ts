import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatapassService} from '../../datapass.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.page.html',
  styleUrls: ['./search-advanced.page.scss'],
})
export class SearchAdvancedPage implements OnInit {
  time: any;
  timeMin: any = 300;
  timeMax: any = 2000;
  timeMin2: any;
  timeMax2: any;
  selectedprovince: any;
  mySelectprovince: any;
  selectedamphures: any;
  mySelectamphures: any;
  loading:any;
  selecteddistricts: any;
  mySelectdistricts: any;
  otheraddress: any;
  address: any;

  constructor(private Http: HttpClient, private datapass: DatapassService,  private loadingController: LoadingController) {
    this.timeMin2 = this.timeMin;
    this.timeMax2 = this.timeMax;
    this.selectedprovince = this.datapass.selectedprovince;
  }

  ngOnInit() {
  }
  setBadge(time) {
    this.timeMin2 = time.lower;
    this.timeMax2 = time.upper;
    console.log(this.timeMin2);
    console.log(this.timeMax2);
  }

  selectedprovincemethod(select: any) {
    const dataJSON = {
      'PATIENT_ID': this.mySelectprovince.value,
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/amphures', JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selectedamphures = data;
          console.log(this.selectedamphures);
        });
  }

  selectedamphuresmethod(mySelectamphures: any) {
    console.log(mySelectamphures);
    const dataJSON = {
      'PATIENT_ID': this.mySelectamphures.value,
    };
    this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/districts', JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selecteddistricts = data;
          console.log(this.selectedamphures);
        });
  }

  selecteddistrictsmethod(mySelectdistricts: any) {
    this.mySelectdistricts = mySelectdistricts;
    this.address = " ต." + this.mySelectdistricts + " อ." + this.mySelectamphures.name + " จ." + this.mySelectprovince.name;
    console.log(this.address);
  }


}
