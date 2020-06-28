import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { rating: 5, comment: 'Imagine all the eatables, living in conFusion!',     author: 'John Lemon', date: '2012-10-16T17:57:28.556094Z' },
  { rating: 4, comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!', author: 'Paul McVites', date: '2014-09-05T17:57:28.556094Z' },
  { rating: 3, comment: 'Eat it, just eat it!', author: 'Michael Jaikishan', date: '2015-02-13T17:57:28.556094Z' },
  { rating: 4, comment: 'Ultimate, Reaching for the stars!',         author: 'Ringo Starry', date: '2013-12-02T17:57:28.556094Z' },
  { rating: 2, comment: 'It\'s your birthday, we\'re gonna party!', author: '25 Cent', date: '2011-12-02T17:57:28.556094Z' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <em>{{hero.comment}}</em>
        <p>Date: {{hero.date | date:"MM/dd/yy"}}</p>
        <p>{{hero.author}} | Rating: {{hero.rating}}</p>
      <hr />
      </li>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      margin: .5em;
      padding: .3em 0;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://v2.angular.io/license
*/