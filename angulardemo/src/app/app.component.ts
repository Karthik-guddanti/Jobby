import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KarthikComponent } from './karthik/karthik.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KarthikComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardemo';
}
