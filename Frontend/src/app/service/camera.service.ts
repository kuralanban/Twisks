import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  public formData: any;
  public webcamImage!: WebcamImage;
  constructor() {}

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    const byteCharacters = atob(this.webcamImage.imageAsBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const decodedImage = new Blob(byteArrays, { type: 'image/jpeg' });

    const file = new File([decodedImage], 'image.jpg', { type: 'image/jpeg' });

    this.formData = file;

    return this.formData;
  }
}
