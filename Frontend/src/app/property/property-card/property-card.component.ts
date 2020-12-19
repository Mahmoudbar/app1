import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IProperty } from '../IProperty.interface';

@Component({
  selector:'app-property-card',
 // template:`<h1>I am a card2</h1>`,
 templateUrl:'property-card.component.html',
 // styles: ['h1 {font-weight: normal;}']
 styleUrls: ['property-card.component.css']

}

)
export class PropertyCardComponent {
  @Input()
  property!: IProperty; // ! weg

}
