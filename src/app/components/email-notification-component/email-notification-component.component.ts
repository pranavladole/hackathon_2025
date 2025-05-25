import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-notification-component',
  imports: [MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    NgIf,
    ],
  standalone: true,
  templateUrl: './email-notification-component.component.html',
  styleUrl: './email-notification-component.component.css'
})
export class EmailNotificationComponentComponent {
  selectedNotificationType: string = '';
  selectedTimeRange: string = '';
  emailDL: string = '';
  showSuccessMessage: boolean = false;

  submitNotification() {
    if (!this.selectedNotificationType) return;
    if (
      this.selectedNotificationType === 'zeroTraffic' &&
      !this.selectedTimeRange
    )
      return;
    if (!this.emailDL) return;

    // TODO: Add your email sending logic here

    // Show success toast
    this.showSuccessMessage = true;

    // Hide toast after 3 seconds
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);

    // Optionally reset form after submit
    this.resetForm();
  }

  resetForm() {
    this.selectedNotificationType = '';
    this.selectedTimeRange = '';
    this.emailDL = '';
  }
}