import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  createTree(): void {
    console.log("d3 called");

  }
}
