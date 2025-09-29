import { Component } from '@angular/core';
import { OceanProductCardComponent } from '@ocean/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OceanProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ocean UI Demo';
  onPressed(kind: string) {
    console.log('Pressed:', kind);
  }
}
