import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [trigger('detailsContentAnimation',
    [
      state('1', style(
        {
          'height': '*',
          'padding-top': '*',
          'padding-bottom': '*'
        })),
      state('0', style(
        {
          'height': 0,
          'padding-top': 0,
          'padding-bottom': 0
        })),
      transition('* => *', animate('400ms ease-out'))
    ])]
})
export class CardComponent implements OnInit {
  areDetailsVisible: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleDetails(): boolean {
    this.areDetailsVisible = !this.areDetailsVisible;
    return this.areDetailsVisible;
  }

}
