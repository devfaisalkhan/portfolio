import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';


declare var createTree: any;


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    createTree();
  }

  onRecenterClicked() {
    createTree();
  }

}
