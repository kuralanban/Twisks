import { TestBed } from '@angular/core/testing';
import { CameraService } from './camera.service';
import { WebcamImage } from 'ngx-webcam';

describe('CameraService', () => {
  let service: CameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraService);
  });

  it('should handle the image', () => {
    const webcamImage: WebcamImage = {
      imageAsBase64: 'iubh', 
      imageData: new ImageData(100, 100),
    } as WebcamImage;
    const result = service.handleImage(webcamImage);
    expect(result).toBeDefined();
    expect(service.webcamImage).toEqual(webcamImage);
  
    // Validate the generated formData object
    expect(service.formData instanceof File).toBe(true);
    expect(service.formData.name).toBe('image.jpg');
    expect(service.formData.type).toBe('image/jpeg'); 
  });
});
