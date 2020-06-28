import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.author} details!</h2>
      <div>{{hero.rating}}</div>
      <div>{{hero.comment}}</div>
      <div>{{hero.date | date:"MM/dd/yy"}}</div>
      <div>{{hero.author}}</div>
     
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://v2.angular.io/license
*/