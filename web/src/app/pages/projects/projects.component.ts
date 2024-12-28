import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  encapsulation: ViewEncapsulation.None,

})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      images: ['/assets/images/adminlte-logo.png'],
      title: `AdminLTE &amp; Angular`,
      description: 'Angular 18 project with AdminLTE 3.2.0 template'
    },
    
  ];
  constructor() {}
  ngOnInit(): void {}

}
