import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'traffic-monitor';
  imagePath = '';

  showSuccess = true;
  showError = false;

  // Call this on some event
  triggerAlert(type: 'success' | 'error') {
    if (type === 'success') {
      this.showSuccess = true;
      this.showError = false;
    } else {
      this.showError = true;
      this.showSuccess = false;
    }
  }
}
