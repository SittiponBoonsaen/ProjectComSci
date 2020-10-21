import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DatapassService} from '../../datapass.service';
import {IonRouterOutlet} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {
    getstore: any;



  constructor(private Http: HttpClient, private router: Router, private datapass: DatapassService, private routerOutlet: IonRouterOutlet, private localNotifications: LocalNotifications) {


  }

  ngOnInit() {
      this.getstore = this.datapass.datastore;
      // this.routerOutlet.swipeGesture = false;
  }

  clickstore(idstore) {
      console.log(idstore);

      const dataJSON = {
            id_store: idstore,
        };
      this.Http.post('http://localhost:5000/apiFinal/getingfield', JSON.stringify(dataJSON))
            .subscribe(datafield => {
                this.datapass.datafield  = datafield;
                this.Http.post('http://localhost:5000/apiFinal/getstoreformID', JSON.stringify(dataJSON))
                    .subscribe(datastore => {
                        this.datapass.getingfieldfromstore = datastore;
                        const navigate = this.router.navigate(['/home/tabs/myhome/myhome-field']);
                    });
            });
  }

    Gosearch() {
        // let navigate = this.router.navigate(['./search']);
        const navigate = this.router.navigate(['/home/tabs/search']);

    }

    notifications() {

    }
}
