import { Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ParallaxService } from '../services/parallax.service';

@Component({
  selector: 'floating-man',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="pulsate">
        <div #elem class="parallax" ></div>
     </div>
    <div #shadow class="circle shadow" [style.top]="top" [style.left]="left" ></div>
  `,
  styles: `
    .parallax {
    width: 100%;
    height: 100vh;
    // background-image: url('/assets/images/background_illus1.svg');
    background-size: 40vh auto;
    animation: shake-lr 17s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
    background-repeat: no-repeat;
    background-position: 75% 30%;
    /* opacity: 0.45; */
    }

    .circle {
    position: absolute;

    background-color: radial-gradient(
        111.63% 111.63% at 42.64% -5.82%,
        #ffa800 33.65%,
        #ff0000 44.58%,
        #ff47d6 100%
    );
    border-radius: 50%;

    --colors-dreamy-gradients-orange: radial-gradient(
        111.63% 111.63% at 42.64% -5.82%,
        #ffa800 33.65%,
        #ff0000 44.58%,
        #ff47d6 100%
    );
    --colors-dreamy-gradients-red: radial-gradient(
        111.63% 111.63% at 42.64% -5.82%,
        #ff0000 33.65%,
        #ff47d6 44.58%,
        #ffa800 100%
    );
    --colors-dreamy-gradients-purple: linear-gradient(
        141.55deg,
        #575eff -3.79%,
        #e478ff 82.82%
    );
    --colors-dreamy-gradients-blue: radial-gradient(
        111.63% 111.63% at 42.64% -5.82%,
        #00aaff 33.65%,
        #00aaff 44.58%,
        #00aaff 100%
    );
    --colors-dreamy-gradients-green: linear-gradient(
        180deg,
        #00ff85 0%,
        rgba(0, 255, 71, 0) 100%
    );
    --colors-dreamy-gradients-orange: radial-gradient(
        111.63% 111.63% at 42.64% -5.82%,
        #ffa800 33.65%,
        #ff0000 44.58%,
        #ff47d6 100%
    );
    text-rendering: optimizelegibility;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    width: 10rem;
    height: 10rem;
    filter: blur(4rem);
    opacity: 0.3;
    background: var(--colors-dreamy-gradients-red);
    }
  `,
})
export class FloatingManComponent {
    @ViewChild('elem') elem: ElementRef = {} as ElementRef;
    @ViewChild('shadow') shadow: ElementRef = {} as ElementRef;
    bgImageUrl = './assets/images/background_illus1.svg'
    mouseX = 0;
    mouseY = 0;
    top = 60;
    left = 60;
     constructor(private parallaxService: ParallaxService ,private renderer: Renderer2) {}
   
     ngAfterViewInit() {
       this.parallaxService.applyParallax(this.elem.nativeElement);
       this.renderer.setStyle(this.elem.nativeElement, 'background-image', `url(${this.bgImageUrl})`);

       this.renderer.listen(
         'document',
         'mousemove',
         (event: MouseEvent) => {
           this.mouseX = event.clientX;
           this.mouseY = event.clientY;
           this.updatePosition();
         }
       );
       // this.parallaxService.applyParallax1(this.elem1.nativeElement);
       
     }
   
     updatePosition() {
      console.log('as');
      
       this.shadow.nativeElement.style.top = this.mouseY + 'px';
       this.shadow.nativeElement.style.left = this.mouseX + 'px';
     }  
}
