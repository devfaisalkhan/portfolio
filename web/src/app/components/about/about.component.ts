import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';


declare var createTree: any;


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="tree">
    <div class="buttons">
        <div class="refresh" (click)="onRecenterClicked()">
            <p>Recenter tree</p>
        </div>
    </div>
    
    <div id="tree-container"></div>
</div>

  `,
  styles: `
    app-about{
    .tree{
        position: relative;
        margin: 0 20px;
        .buttons{
            z-index: 999;
            cursor: pointer;
            display: flex;
            justify-content: center;
    
            .refresh{
                z-index: 999;
                position: absolute;
                left: 0;
                top: 50%;
                bottom: 0;
                text-decoration: underline;
            }
        }
    }

}

 
  
  #tree-container {
    height: 100vh;
    z-index: 9;
    position: relative;

  }

  `,
  encapsulation: ViewEncapsulation.None,

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
