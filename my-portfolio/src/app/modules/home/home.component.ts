import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SkillsComponent } from '../../components/skills/skills.component';

import { CardsVideoComponent } from '../../components/skills/skills-video.component';
import { SkillTextComponent } from '../../components/skills/skill-text.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { EncryptionComponent } from '../../components/encryption/encryption.component';

import * as AOS from 'aos';
import { ProjectsComponent } from '../../components/projects.component';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    AOS.init({});
  }
}
