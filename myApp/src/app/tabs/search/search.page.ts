import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search: any;
  datasearch: any[] = [];
  textsearch = '';
  isItemAvailable = false;
    loading: any;
  constructor(private router: Router, private datapass: DatapassService, private Http: HttpClient, private loadingController: LoadingController) { }

  ngOnInit() {
    this.datasearch = this.datapass.datastore;

  }

  searchAdvanced() {
    const navigate = this.router.navigate(['/home/tabs/search/search-advanced']);
  }
  searchmethod(event) {
    if (event.detail.value !== ''){
      this.isItemAvailable = true;
      this.textsearch = event.detail.value;
    }
    else {
      this.isItemAvailable = false;
    }
  }

    async clickstore(id_store : any) {
        this.loading = await this.loadingController.create({
            message: 'กำลังโหลดข้อมูล...',
        });
      let dataJSON = {
        'id_store': id_store,
      };
      this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getingfield', JSON.stringify(dataJSON))
          .subscribe(datafield => {
            this.datapass.datafield  = datafield;
            this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getstoreformID', JSON.stringify(dataJSON))
                .subscribe(datastore => {
                  this.datapass.getingfieldfromstore = datastore;
                    this.loading.dismiss();
                  const navigate = this.router.navigate(['/home/tabs/myhome/myhome-field']);
                });
              this.loading.present();
          });
        this.loading.present();
  }
}
