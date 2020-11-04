import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatapassService} from '../../datapass.service';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.page.html',
  styleUrls: ['./search-advanced.page.scss'],
})
export class SearchAdvancedPage implements OnInit {
  time: any;
  timeMin: any = 100;
  timeMax: any = 200;
  timeMin2: any;
  timeMax2: any;
  selectedprovince: any;
  mySelectprovince: any;
  selectedamphures: any;
  mySelectamphures: any;


  constructor(private Http: HttpClient, private datapass: DatapassService) {
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
    console.log(select);
    let dataJSON = {
      'PATIENT_ID': select,
    };
    this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/amphures',JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selectedamphures = data;
          console.log(this.selectedamphures);
        });
  }

  selectedamphuresmethod(mySelectamphures: any) {
    console.log(mySelectamphures);
  }
}
