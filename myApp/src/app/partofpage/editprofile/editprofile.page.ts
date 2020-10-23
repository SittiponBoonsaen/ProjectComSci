import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  public image: any;

  constructor(private camera: Camera, public alertController: AlertController) { }

  ngOnInit() {
  }

  async selectImage() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      buttons: [
        {
          text: 'Take a Photo',
          handler: () => {
            this.selectImageInCamera();
          }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.selectImageInGallery();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
  selectImageInCamera() {
    const CAMERA_OPTIONS: CameraOptions = {
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    }).catch(err => console.error(err));
  }

  selectImageInGallery() {
    const CAMERA_OPTIONS: CameraOptions = {
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    }).catch(err => console.error(err));
  }

}
