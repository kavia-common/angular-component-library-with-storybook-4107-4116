import { Component } from '@angular/core';
import { OceanButtonComponent } from '../../projects/ocean-ui/src/lib/button/ocean-button.component';
import { OceanCardComponent } from '../../projects/ocean-ui/src/lib/card/ocean-card.component';
import { OceanPricingTableComponent } from '../../projects/ocean-ui/src/lib/pricing-table/ocean-pricing-table.component';
import { OceanContactComponent } from '../../projects/ocean-ui/src/lib/contact/ocean-contact.component';

@Component({
  selector: 'app-root',
  imports: [OceanButtonComponent, OceanCardComponent, OceanPricingTableComponent, OceanContactComponent],
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
