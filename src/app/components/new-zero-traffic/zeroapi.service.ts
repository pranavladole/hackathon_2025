import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface StatusCount {
  servicename: string;
  statusCode: string;
  todayCount: number;
  yesterdayCount: number;
}

// export interface ClientCount {
//   clientId: string;
//   todayCount: number;
//   yesterdayCount: number;
// }
// export interface CombinedAIClientResponse {
//   copilotResponse: string;
//   clients: ClientCount[];
// }


export interface zClientCount {
  clientId: string;
  servicename: string;
  channel: string;
  todayCount: number;
  yesterdayCount: number;
}
// export interface zCombinedAIClientResponse {
//   zclients: zClientCount[];
// }

@Injectable({
  providedIn: "root",
})
export class ZeroApiService {
  private apiUrl = "http://localhost:8080/api/chat";
  private zerotrafficUrl = "http://localhost:8080/angularzerotraffic";
  private zzerotrafficUrl = "http://localhost:8080/zerotraffic";
  constructor(private http: HttpClient) {}

  // zerotraffic(data: {
  //   startDate: string;
  //   endDate: string;
  // }): Observable<CombinedAIClientResponse> {
  //   return this.http.post<CombinedAIClientResponse>(this.zerotrafficUrl, data);
  // }

  zzerotraffic(data: {
    startDate: string;
    endDate: string;
  }): Observable<zClientCount[]> {
    return this.http.post<zClientCount[]>(this.zzerotrafficUrl, data);
  }

  sendMessage(message: string) {
    return this.http.post(this.apiUrl, { message }, { responseType: "text" });
  }
}
