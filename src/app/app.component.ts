import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  workHistory = ["Apple", "Google","Goldman", "Systemspecs", "BrilloConnect", "Exalt", "SystemSpecs"]
}
