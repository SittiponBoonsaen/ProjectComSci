import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';

@Component({
  selector: 'app-addfield',
  templateUrl: './addfield.page.html',
  styleUrls: ['./addfield.page.scss'],
})
export class AddfieldPage implements OnInit {

  constructor(public datapassService: DatapassService) { }

  ngOnInit() {
  }

}
