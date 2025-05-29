import { Component } from '@angular/core';
import {
  ApiService,
  ClientCount,
  CombinedAIClientResponse,
} from '../../api.service';
import { NgIf, NgFor } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-zero-traffic',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './zero-traffic.component.html',
  styleUrl: './zero-traffic.component.css',
})
export class ZeroTrafficComponent {
  startDate = '';
  endDate = '';
  
  copilotResponseSanitized: SafeHtml = '';
  copilotResponse: string = '';
  responseData: ClientCount[] = [];
  clientReport: CombinedAIClientResponse = {
    copilotResponse: '',
    clients: [],
  };

  isResponseEmpty: boolean = false;
  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer) {}
  isLoading = false;
  submitDates(): void {
    this.isLoading = true; // Show loader
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const startDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
      now.getDate()
    )}T00:00`;

    const requestData = {
      startDate: startDate,
      endDate: this.endDate,
    };

    console.log('new Request Data:', requestData);
    this.apiService.zerotraffic(requestData).subscribe(
      (res) => {
        this.responseData = res.clients;
        const htmlMatch = res.copilotResponse.match(/```html([\s\S]*?)```/);
        const extractedHtml = htmlMatch ? htmlMatch[1].trim() : res.copilotResponse;
    
        this.copilotResponse = res.copilotResponse;
        this.copilotResponseSanitized = this.sanitizer.bypassSecurityTrustHtml(extractedHtml);
        console.log(res.copilotResponse);
        this.isLoading = false; // Hide loader
        this.isResponseEmpty = this.clientReport.clients.length ===0 ;

      },
      (err) => {
        console.error('Error:', err);
        this.isResponseEmpty = true;
        this.isLoading = false; // Hide loader
      }
    );
  }
}