import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hero-video',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="video d-flex w-100 h-100">
      <!-- <video
        class="object-fit-cover w-100 h-100 position-absolute  bottom-0 start-0 end-0"
        [autoplay]="true"
        [muted]="true"
        [loop]="true"
        [playsInline]="true"
        preload="true"
      >
        <source src="./assets/videos/blackhole.gif" type="video/webm" />
      </video> -->

      <img class="object-fit-cover w-100 h-100 position-absolute  bottom-0 start-0 end-0" src="./assets/videos/blackhole.gif" alt="GIF as Video">

    </div>
  `,
  styles: `
      .video {
        img {
          width: 100%;
          top: -370px;
        }
      }

      @media only screen and (max-width: 786px) {
        video {
          top: 0;
        }
      }
  `,
})
export class HeroVideoComponent {}
