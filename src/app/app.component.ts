import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('closed', style({ height: '0px' })),
      state('open', style({ height: '200px' })),
      transition('closed => open', animate('250ms ease-in-out')),
      transition('open => closed', animate('250ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  title = 'entwine-app';
  menuState = 'closed';

  toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  }
}
