import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ocean UI Demo';
  onPressed(kind: string) {
    console.log('Pressed:', kind);
  }
}
