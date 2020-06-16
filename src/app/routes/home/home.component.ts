import { Component } from '@angular/core';
import { ThemeService } from '../../services';

@Component({
  selector: 'home-route',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(
    public themer: ThemeService
  ) { }
}
