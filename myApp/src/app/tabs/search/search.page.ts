import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';

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
  constructor(private router: Router, private datapass: DatapassService, private Http: HttpClient) { }

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

  clickstore(id_store : any) {

      let dataJSON = {
        'id_store': id_store,
      };
      this.Http.post('http://localhost:5000/apiFinal/getingfield',JSON.stringify(dataJSON))
          .subscribe(datafield => {
            this.datapass.datafield  = datafield;
            this.Http.post('http://localhost:5000/apiFinal/getstoreformID',JSON.stringify(dataJSON))
                .subscribe(datastore => {
                  this.datapass.getingfieldfromstore = datastore;
                  let navigate = this.router.navigate(['/home/tabs/myhome/myhome-field']);
                });
          });
  }
}
