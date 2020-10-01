import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatapassService} from '../../datapass.service';

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
  constructor(private router: Router, private datapass: DatapassService) { }

  ngOnInit() {
    this.datasearch = this.datapass.datastore;

  }

  searchAdvanced() {
    const navigate = this.router.navigate(['/search-advanced']);
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

  clickstore( id_store : any) {
      console.log(id_store);
  }
}
