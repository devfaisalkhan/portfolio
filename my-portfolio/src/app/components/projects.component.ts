import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <h1 class="text-center m-5">My projects</h1>
    <div class="row projects ">
      @for (proj of projects; track $index) {
      <div class="col-5">
        <div class="card bg-dark m-4" style="">
          <img class="card-img-top " [src]="proj.img" alt="Card image cap" />
          <div class="card-body text-white">
            <h5 class="card-title">{{ proj.title }}</h5>
            <p class="card-text">
              {{ proj.description }}
            </p>
          </div>
        </div>
      </div>
      }
    </div>
  `,
  styles: `
    h1{
      background: linear-gradient(to right, #a855f7, #06b6d4);
      -webkit-background-clip: text; /* For Safari */
      background-clip: text;
      color: transparent;
    }
    .projects{
        overflow-x: scroll;
        flex-wrap: nowrap;
        z-index: 9999;
        position: relative;
   
        ::-webkit-scrollbar {
              display: none;
          }
          /* For Firefox */
          scrollbar-width: none;
          /* For Internet Explorer and Edge */
          -ms-overflow-style: none;
          /* For Firefox */
          overflow: -moz-scrollbars-none;
        .card{
        }
    }

    

      @media only screen and (max-width: 786px) {
        .col-5{
          width: 80%;
        }
      }    
    `,
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      img: './assets/images/frame.png',
      title: 'Intellishuff',
      description: 'Intellishuff, the ultimate tool for generating unique, randomized MCQs.',
    },
    {
      img: './assets/images/frame.png',
      title: 'Amanah',
      description: 'Angular Angular AngularAngularAngularAngular',
    },
    {
      img: './assets/images/frame.png',
      title: 'Sahala',
      description: 'Angular Angular AngularAngularAngularAngular',
    },
    {
      img: './assets/images/frame.png',
      title: 'Bindawood',
      description: 'Angular Angular AngularAngularAngularAngular',
    },
    {
      img: './assets/images/frame.png',
      title: 'Choisy',
      description: 'Angular Angular AngularAngularAngularAngular',
    }
  ];
  constructor() {}
  ngOnInit(): void {}
}
