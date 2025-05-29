// import { Component } from "@angular/core";
// import { NgIf, NgFor } from "@angular/common";
// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatInputModule } from "@angular/material/input";
// import { MatNativeDateModule } from "@angular/material/core";
// import { FormsModule } from "@angular/forms";
// import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
// import { zClientCount, ZeroApiService } from "./zeroapi.service";
// @Component({
//   selector: "app-new-zero-traffic",
//   standalone: true,
//   imports: [
//     MatDatepickerModule,
//     MatInputModule,
//     MatNativeDateModule,
//     FormsModule,
//     NgIf,
//     NgFor,
//   ],
//   templateUrl: "./new-zero-traffic.component.html",
//   styleUrl: "/new-zero-traffic.component.css",
// })
// export class NewZeroTrafficComponent {
//   startDate = "";
//   endDate = "";
//   responseData: zClientCount[] = [];
//   //clientReport: zCombinedAIClientResponse = {
//   //  zclients: [],
//   //};

//   constructor(private zeroApiService: ZeroApiService) {}

//   isResponseEmpty: boolean = false;

//   isLoading = false;

//   submitDates(): void {
//     this.isLoading = true; // Show loader
//     const now = new Date();
//     const pad = (n: number) => n.toString().padStart(2, "0");
//     const startDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
//       now.getDate()
//     )}T00:00`;

//     const requestData = {
//       startDate: startDate,
//       endDate: this.endDate,
//     };

//     console.log("new Request Data:", requestData);
//     this.zeroApiService.zzerotraffic(requestData).subscribe(
//       (res) => {
//         console.log("response received:", res); // ✅ `res` is an array
//         this.responseData = res; // ✅ use res directly
//         console.log("responseData received:", this.responseData);
//         this.isResponseEmpty = this.responseData.length === 0;
//         this.isLoading = false;
//       },
//       (err) => {
//         console.error("Error:", err);
//       }
//     );
//   }
// }

import { Component } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule } from "@angular/forms";
import { zClientCount, ZeroApiService } from "./zeroapi.service";

@Component({
  selector: "app-new-zero-traffic",
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: "./new-zero-traffic.component.html",
  styleUrls: ["./new-zero-traffic.component.css"], // ✅ FIXED: plural form
})
export class NewZeroTrafficComponent {
  startDate = "";
  endDate = "";
  responseData: zClientCount[] = [];
  isResponseEmpty: boolean = false;
  isLoading = false;

  constructor(private zeroApiService: ZeroApiService) {}

  submitDates(): void {
    this.isLoading = true;
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    const startDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
      now.getDate()
    )}T00:00`;

    const requestData = {
      startDate: startDate,
      endDate: this.endDate,
    };

    console.log("new Request Data:", requestData);
    this.zeroApiService.zzerotraffic(requestData).subscribe(
      (res) => {
        console.log("response received:", res);
        this.responseData = res;
        this.isResponseEmpty = this.responseData.length === 0;
        this.isLoading = false;
      },
      (err) => {
        console.error("Error:", err);
        this.isLoading = false;
      }
    );
  }
}
