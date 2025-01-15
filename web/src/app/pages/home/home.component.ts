import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SkillsComponent } from '../../components/skills/skills.component';

import { CardsVideoComponent } from '../../components/skills/skills-video.component';
import { SkillTextComponent } from '../../components/skills/skill-text.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { EncryptionComponent } from '../../components/encryption/encryption.component';
import { ProjectsComponent } from '../../components/projects.component';

import  AOS from 'aos';
import { ContactComponent } from '../../components/contact.component';
import { AboutComponent } from '../../components/about.component';
import { FloatingManComponent } from '../../components/flaoting-man.component';
import { StarsBgComponent } from '../../components/stars-bg.componen';
@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SkillsComponent,
    CardsVideoComponent,
    SkillTextComponent,
    EncryptionComponent,
    HeroComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    FloatingManComponent,
    StarsBgComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.changeBodyColor('#030014', '#fff');
  }

  ngAfterViewInit() {
    AOS.init({});
  }

  
  changeBodyColor(color: string, textColor: string): void {
    this.renderer.setStyle(document.body, 'background-color', color);
    this.renderer.setStyle(document.body, 'color', textColor);
    
    // const navbar = document.querySelectorAll('.nav-link')as NodeListOf<HTMLElement>;
    // navbar.forEach((item: HTMLElement) => {
    //   item.style.color = '#fff'; // Change the color of each item
    // });
   
  }

}
