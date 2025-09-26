import { Component } from '@angular/core';
import { OceanButtonComponent } from '../../projects/ocean-ui/src/lib/button/ocean-button.component';
import { OceanCardComponent } from '../../projects/ocean-ui/src/lib/card/ocean-card.component';

@Component({
  selector: 'app-root',
  imports: [OceanButtonComponent, OceanCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // PUBLIC_INTERFACE
  title = 'Ocean UI Demo';
  // PUBLIC_INTERFACE
  onPressed(kind: string) {
    console.log('Pressed:', kind);
  }
}
