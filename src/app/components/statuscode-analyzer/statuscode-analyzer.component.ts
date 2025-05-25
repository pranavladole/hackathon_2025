import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService, StatusCount } from '../../api.service';


@Component({
  selector: 'app-statuscode-analyzer',
  standalone: true,
  imports: [ MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule, // To enable ngModel for two-way binding
    NgIf,
    NgFor,],
  templateUrl: './statuscode-analyzer.component.html',
  styleUrl: './statuscode-analyzer.component.css'
})
export class StatuscodeAnalyzerComponent {
  startDate = '';
  endDate = '';
  responseData: StatusCount[] = [];
  isLoading = false;
  constructor(private apiService: ApiService) {}

  submitDates(): void {
    this.isLoading = true;
    const requestData = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.apiService.statusCodeAnalyse(requestData).subscribe(
      (res) => {
        this.isLoading = false; // Hide loader
        (this.responseData = res), console.log('response is' + res);
      },
      (err) => {
        console.error('Error:', err);
        this.isLoading = false; // Hide loader
      }
    );
  }
}
