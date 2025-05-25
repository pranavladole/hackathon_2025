import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  ApiService,
  ClientCount,
  CombinedAIClientResponse,
} from '../../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-percentageincrease',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule, // To enable ngModel for two-way binding
    NgIf,
    NgFor,
    CommonModule
  ],
  templateUrl: './percentageincrease.component.html',
  styleUrl: './percentageincrease.component.css',
})
export class PercentageincreaseComponent {
  startDate = '';
  endDate = '';

  isResponseEmpty: boolean = false;
  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}
  copilotResponseSanitized: SafeHtml = '';
  copilotResponse: string = '';
  isLoading = false;
  responseData: ClientCount[] = [];
  
  clientReport: CombinedAIClientResponse = {
    copilotResponse: '',
    clients: [],
  };
  submitDates(): void {
    this.isLoading = true;
    const requestData = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.apiService.percentincreases(requestData).subscribe(
      (res) => {
        this.isLoading = false; // Hide loader
        console.log(res);
        this.responseData = res.clients;

        const htmlMatch = res.copilotResponse.match(/```html([\s\S]*?)```/);
        const extractedHtml = htmlMatch
          ? htmlMatch[1].trim()
          : res.copilotResponse;

        this.copilotResponse = res.copilotResponse;
        this.copilotResponseSanitized =
          this.sanitizer.bypassSecurityTrustHtml(extractedHtml);
        console.log(res.copilotResponse);

        //this.isResponseEmpty = !res || res.length === 0;
      },
      (err) => {
        this.isLoading = false; // Hide loader
        console.error('Error:', err);
        this.isResponseEmpty = true;
      }
    );
  }
}
