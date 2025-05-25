import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ApiService, ClientCount } from '../../api.service';

@Component({
  selector: 'app-percentagedecrease',
  standalone: true, 
  imports: [MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,  // To enable ngModel for two-way binding
    NgIf, NgFor

  ],
  templateUrl: './percentagedecrease.component.html',
  styleUrl: './percentagedecrease.component.css'
})
export class PercentagedecreaseComponent {
  startDate = '';
  endDate = '';
  responseData: ClientCount[] = [];

  constructor(private apiService: ApiService) {}

  submitDates(): void {
    const requestData = {
      startDate: this.startDate,
      endDate: this.endDate
    };

    console.log(requestData);
    this.apiService.percentdecreases(requestData).subscribe(
      (res) => 
      
      {this.responseData = res, console.log("response is"+ res)      
      },
      
      (err) => console.error('Error:', err)
    );

    
  }
}
