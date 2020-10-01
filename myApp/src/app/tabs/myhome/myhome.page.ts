import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DatapassService} from '../../datapass.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {
    getstore: any;



  constructor(private Http: HttpClient, private router: Router, private data: DatapassService) {


  }

  ngOnInit() {
      this.Http.get('http://localhost/apiFinal/getstore')
          .subscribe(data => {
              this.getstore  = data;
              console.log(this.getstore);
          });

  }
  clickstore(idstore) {
      console.log(idstore);

        let dataJSON = {
            'id_store': idstore,
        };
        this.Http.post('http://localhost/apiFinal/getingfield',JSON.stringify(dataJSON))
            .subscribe(datafield => {
                this.data.datafield  = datafield;
                // console.log(this.data.datafield);
                this.Http.post('http://localhost/apiFinal/getstoreformID',JSON.stringify(dataJSON))
                    .subscribe(datastore => {
                        this.data.datastore = datastore;
                        // console.log(this.data.datastore);
                        let navigate = this.router.navigate(['/myhome-field']);

                    });
            });
  }

    Gosearch() {
        // let navigate = this.router.navigate(['./search']);
        let navigate = this.router.navigate(['/home/tabs/search']);
    }
}
