import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-managestore',
  templateUrl: './managestore.page.html',
  styleUrls: ['./managestore.page.scss'],
})
export class ManagestorePage implements OnInit {
  dataUsername: any;
  loading: any;
  products: any;

  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router,  private loadingController: LoadingController) { }

  ngOnInit() {

  }
  async ionViewWillEnter() {
    this.loading = await this.loadingController.create({
      message: 'รอสักครู่...',
    });
    this.dataUsername = this.datapassService.userIDLogin;
    let ownerid;
    for (ownerid of this.dataUsername) {
    }
    const dataJSON = {
      owner_store: ownerid.id_member,
    };
    this.Http.post('http://localhost:5000/apiFinal/getOwnerstore', JSON.stringify(dataJSON))
        .subscribe(datastore => {
          this.loading.dismiss();
          this.datapassService.datastoreowner = datastore;
          this.products = datastore;
          this.datapassService.managedatastore = this.products;
          console.log(datastore);
        });
    this.loading.present();
  }

  goToAddstore() {
    const navigate = this.router.navigate(['/home/tabs/managestore/addstore']);
  }

  gotoEdit(idstore) {
    this.datapassService.idstoreformmanagestore = idstore;
    const navigate = this.router.navigate(['/home/tabs/managestore/editstore']);
  }

  gotomanagefiled(idstore) {
    this.datapassService.idstoreformmanagestore = idstore;
    console.log(this.datapassService.idstoreformmanagestore);
    const navigate = this.router.navigate(['/home/tabs/managestore/managefield']);
  }
}
