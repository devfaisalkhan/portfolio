import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-light bg-light  w-100"
    >
      <div class="container-fluid">
        <!-- <a class="navbar-brand">Faisal Khan</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav d-flex justify-content-between align-items-center w-50 w-5" >
            <li class="nav-item" (click)="scrollToElement('about')">
              <a class="nav-link " aria-current="page">About me</a>
            </li>
            <li class="nav-item" (click)="scrollToElement('skills')">
              <a class="nav-link " aria-current="page">Skills</a>
            </li>
            <li class="nav-item" (click)="scrollToElement('projects')">
              <a class="nav-link " aria-current="page">Projects</a>
            </li>

            <li class="nav-item" (click)="scrollToElement('contact')">
              <a class="nav-link " aria-current="page">Contact</a>
            </li>

            <li class="nav-item" (click)="onResumeClicked()">
              <a class="nav-link " aria-current="page">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: `
    .navbar{
      box-shadow: 0 0 20px 3px #2a0e61 !important;
      background-color: #03001417 !important;
      backdrop-filter: blur(20px);
      color: #fff !important;
      z-index: 99999;

    }
    .navbar-brand{
      color:#fff !important;
      
    }
    .navbar-nav{
      border-radius: 20px;
      border: 1px solid;
      background: #0300145e;
      .nav-item{
        cursor: pointer;
      }
    }
    .nav-link{
      margin: 0 16px;
      color:#fff !important;
    }
    button{
      background:#fff !important;

    }
    .nav-link:hover{
      color: inherit !important;
    }

    .navbar-brand{
      font-family: monospace;

    }

    @media only screen and (max-width: 992px) {
  /* Your CSS styles for mobile devices go here */
      .navbar{
        position: relative !important;
      }

      .navbar-nav{
      border: none;
      background: none;
      .nav-item{
        cursor: default;
      }
      }

     
    }

  `,
})
export class NavbarComponent {
  constructor() {}
  scrollToElement(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }    
  }

  onResumeClicked() {
    window.open('https://drive.google.com/file/d/1BiyB-OCtl1wxSEIxnXkPsRiV2YyOpheg/view?usp=sharing');
  }
}
 