import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'encryption-video',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="video d-flex justify-content-center align-items-center w-100">
      <!-- <video
        class="object-fit-cover w-100 h-100 position-absolute top-0 bottom-0 start-0 end-0"
        [autoplay]="true"
        [muted]="true"
        [loop]="true"
        [playsInline]="true"
        preload="true"
      >
        <source src="./assets/videos/encryption.webm" type="video/webm" />
      </video> -->

      <img class="object-fit-cover w-100 h-100 position-absolute top-0 bottom-0 start-0 end-0" 
        src="./assets/videos/encryption.gif" alt="GIF as Video">
    </div>
  `,
  styles: `
       encryption-video .video{
        // height: 100vh;
       } 

       encryption-video .lock{
        z-index: 9;
        encryption-video img{
        }
       }
    `,
})
export class EncryptionVideoComponent {
  constructor() {}
}
