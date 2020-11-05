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

  async selectedprovincemethod(select: any) {
    this.loading = await this.loadingController.create({
      message: 'รอสักครู่...',
    });
    console.log(select);
    let dataJSON = {
      'PATIENT_ID': select,
    };
    this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/amphures',JSON.stringify(dataJSON))
        .subscribe(data => {
          this.selectedamphures = data;
          this.loading.dismiss();
          console.log(this.selectedamphures);
        });
    this.loading.present();
  }

  selectedamphuresmethod(mySelectamphures: any) {
    console.log(mySelectamphures);
  }
}
