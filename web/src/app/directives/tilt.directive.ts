import { AfterViewInit, Directive, ElementRef, Inject } from '@angular/core';
import Tilt, { TiltOptions } from 'vanilla-tilt';

@Directive({
  selector: '[tilt]',
  standalone: true,
})
export class TiltDirective implements AfterViewInit {
  constructor( private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const options: TiltOptions = {
      max: 25, // Max tilt rotation in degrees
      glare: true, // Add glare effect (boolean)
      'max-glare': 0.1, // Max glare opacity (number)
      gyroscope: true, // Enable gyroscope tilt (boolean)
      gyroscopeMinAngleX: -45, // Min gyroscope tilt angle on X-axis (number)
      gyroscopeMaxAngleX: 45, // Max gyroscope tilt angle on X-axis (number)
      gyroscopeMinAngleY: -45, // Min gyroscope tilt angle on Y-axis (number)
      gyroscopeMaxAngleY: 45, // Max gyroscope tilt angle on Y-axis (number)
    };
    Tilt.init(this.elementRef.nativeElement, options || {});
  }
}
