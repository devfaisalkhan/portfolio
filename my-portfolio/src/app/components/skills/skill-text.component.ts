import { Component, ViewEncapsulation } from '@angular/core';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'skill-text',
  standalone: true,
  imports: [TiltDirective],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="m-5 position-relative">
      <div
        class="tag text-center d-flex align-items-center justify-content-center"
      >
        <h6
          tilt
          class="d-flex align-items-center position-relative justify-content-center m-2"
        >
          <img src="assets/images/stars.svg" style="margin: 0 12px;"/>
          Think better with Angular17
        </h6>
      </div>
      <h2 class="text-center m-2">Making apps with modern technologies</h2>
      <h4 class="text-center m-2">Never miss a task deadline on idea</h4>
    </section>
  `,
  styles: `
      skill-text section{
        // margin: 0 0 100px 0;;
      }
      skill-text h6{
        border: 1px solid #7042f77b;
        border-radius: 12px;
        height: auto;
        color: #b49bff;
        padding: 16px;
      
      }
    skill-text h4{
      font-family: "Dancing Script", cursive;
      font-optical-sizing: auto;
      font-style: normal;
    }
      @media only screen and (max-width: 786px) {
        skill-text{
          h6{
            height: auto;
          }
          h2{
            font-size: 12px;

          }
          h4{
            font-size: 12px;

          }
        }
      }

    `,
})
export class SkillTextComponent {
  constructor() {}
}
