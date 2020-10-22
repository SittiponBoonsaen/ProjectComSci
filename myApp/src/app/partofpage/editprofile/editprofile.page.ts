import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  @ViewChild('filebin') filebtn: {
      nativeElement: HTMLInputElement
  };
  constructor(private Http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
  uploadimage(event) {
    const files = event.target.files;
    console.log(files);
  }

  undateprofile() {
    this.filebtn.nativeElement.click();
  }
}
