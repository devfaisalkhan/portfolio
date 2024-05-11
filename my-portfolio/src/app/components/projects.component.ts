import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="swiper">
    <h1 class="text-center m-5" data-aos="flip-up">My projects</h1>
    <div class="row projects" >

      @for (proj of projects; track $index) {
      <div class="col-4">
        <div class="card bg-dark m-4" style="" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div class="card-body text-white">
          <swiper-container pagination="true" >
            @for(img of proj.images; track $index ) {
              <swiper-slide>
                <img [src]="img" alt="">
              </swiper-slide>
            }
          </swiper-container>
            <h5 class="card-title">{{ proj.title }}</h5>
            <p class="card-text">
              {{ proj.description }}
            </p>
          </div>
        </div>
      </div>
      }
    </div>
  </div>

  `,
  styles: `
  projects{
    z-index: 9999;

  }
  .swiper{
    z-index: 9999;
  }
 
  .card{
    .card-body{
    padding: 0;
    swiper-container {
      swiper-slide{
        height: 300px;
        img{
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }
  
  }

  .card-title{
        padding: 10px;
      }
    .card-text{
        padding: 10px;
    }
  }
    h1{
      background: linear-gradient(to right, #a855f7, #06b6d4);
      -webkit-background-clip: text; /* For Safari */
      background-clip: text;
      color: transparent;
    }
    .projects{
        overflow-x: auto;
        flex-wrap: nowrap;
        position: relative;
        z-index: 99999;

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
          cursor: pointer;
        }
    }

    

      @media only screen and (max-width: 786px) {
        .col-4{
          width: 80%;
        }
      }    
    `,
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      images: [
        './assets/images/int-1.png',
        './assets/images/int-2.png',
        './assets/images/int3.png',
        './assets/images/int4.png',
        './assets/images/int5.png',

      ],
      title: 'Intellishuff',
      description: 'Intellishuff, the ultimate tool for generating unique, randomized MCQs.',
    },
    {
      images: [
        './assets/images/ama1.png',
        './assets/images/ama2.png',
        './assets/images/ama3.png',
        './assets/images/ama4.png',
        './assets/images/ama5.png',
      ],
        title: 'Amanah',
      description: 'Share your ride, share the cost. Post your travel plans and connect with others who need a lift.',
    },
    {
      images: [
        './assets/images/sah2.png',
        './assets/images/sah3.png',
        './assets/images/sah4.png',
        './assets/images/sah5.png',
        './assets/images/sah6.png',
        './assets/images/sah7.png',
        './assets/images/sah8.png',
      ],
       title: 'Sahala',
      description: 'Your pocket-sized mall. Browse, shop, and save on everything from gadgets to fashion.',
    },
    // {
    //   images: [
    //     './assets/images/frame.png',
    //     './assets/images/frame.png',
    //     './assets/images/frame.png',
    //     './assets/images/frame.png',
    //   ],
    //   title: 'Bindawood',
    //   description: 'Angular Angular AngularAngularAngularAngular',
    // },
    // {
    //   images: [
    //     './assets/images/frame.png',
    //     './assets/images/frame.png',
    //     './assets/images/frame.png',
    //     './assets/images/frame.png',
    //   ],
    //   title: 'Choisy',
    //   description: 'Angular Angular AngularAngularAngularAngular',
    // }
  ];
  constructor() {}
  ngOnInit(): void {}

}
