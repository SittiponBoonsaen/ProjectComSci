import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../../datapass.service';
import {IonRouterOutlet} from '@ionic/angular';

@Component({
  selector: 'app-datareservations',
  templateUrl: './datareservations.page.html',
  styleUrls: ['./datareservations.page.scss'],
})
export class DatareservationsPage implements OnInit {

  constructor(private router: Router, private datapass: DatapassService, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  goToshowChart() {
    const navigate = this.router.navigate(['/home/tabs/datareservations/chartreservations']);
  }
}
