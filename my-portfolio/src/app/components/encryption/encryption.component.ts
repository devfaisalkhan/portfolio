import { Component, ViewEncapsulation } from '@angular/core';
import { EncryptionVideoComponent } from './encryption-video.component';

@Component({
  selector: 'encryption',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [EncryptionVideoComponent],
  template: `
    <div
      class="secure position-relative d-flex justify-content-center align-items-center"
    >
      <span
        class="text-center font-weight-bold position-absolute top-0  start-0 end-0 z-1"
        >Perfromance
        <span class="and"> & </span>
        Security</span
      >

      <div
        class="lock position-relative d-flex justify-content-center align-items-center"
      >
        <div class="main ">
          <img src="./assets/images/LockMain.png" alt="" />
        </div>
        <div class="top position-absolute top-0 bottom-0 start-0 end-0">
          <img src="./assets/images/LockTop.png" alt="" />
        </div>

        <h4>Encryption</h4>
      </div>
      <encryption-video></encryption-video>

      <span
        class="text-center font-weight-normal position-absolute bottom-0 start-0 end-0 z-1"
        >Secure your data with end to end encryption</span
      >
    </div>
  `,
  styles: `
    encryption{
      .secure{
        height: 100vh;
        flex-direction: column;
        span {
          font-size: 40px;
          &.and{
            background: linear-gradient(to right, #a855f7, #06b6d4);
            -webkit-background-clip: text; /* For Safari */
            background-clip: text;
            color: transparent;
          }
        }
          .lock{
            flex-direction: column;
            z-index: 999;
            h4{
              z-index: 1;
              color: #7042f88b;
            }
            .main{
              z-index: 9;
              cursor: pointer;
            }
            &:hover{
                .top{
                  top: -60px !important;
                  z-index: 1;
                }
            }
            .top{
              left: 18% !important;
              right: 18% !important;
              transition: top 0.7s ease;
            }
        }
      }
    }
    `,
})
export class EncryptionComponent {
  constructor() {}
}
