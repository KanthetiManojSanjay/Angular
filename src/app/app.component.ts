import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  message: any = 'my-message';
  colorName = 'yellow';
  fontWeight = "bold";
  borderStyle = '1px solid black';
}
