import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'skills-video',
  standalone: true,
  imports: [],
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
        <source src="./assets/videos/cards-video.webm" type="video/webm" />
      </video> -->

      <img class="object-fit-cover w-100 h-100 position-absolute top-0 bottom-0 start-0 end-0" 
        src="./assets/videos/cards-video.gif" alt="GIF as Video">
    </div>
  `,
  styles: `
      .video {
        img {
          width: 100%;
        }
      }
  `,
})
export class CardsVideoComponent {}
