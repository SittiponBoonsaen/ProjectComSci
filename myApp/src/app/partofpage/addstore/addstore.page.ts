import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';

@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.page.html',
  styleUrls: ['./addstore.page.scss'],
})
export class AddstorePage implements OnInit {

  constructor(public datapassService: DatapassService) { }

  ngOnInit() {
  }

}
