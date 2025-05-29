import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface StatusCount {
  servicename: string;
  statusCode: string;
  todayCount: number;
  yesterdayCount: number;
}

export interface ClientCount {
  clientId: string;
  todayCount: number;
  yesterdayCount: number;
}
export interface CombinedAIClientResponse {
  copilotResponse: string;
  clients: ClientCount[];
}

export interface zClientCount {
  clientId: string;
  servicename: string;
  channel: string;
  todayCount: number;
  yesterdayCount: number;
}
export interface zCombinedAIClientResponse {
  zclients: zClientCount[];
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = "http://localhost:8080/api/chat";
  private statuscodeanalyse = "http://localhost:8080/angularstatuscodeanalyse";
  private zerotrafficUrl = "http://localhost:8080/angularzerotraffic";
  private percentincrease = "http://localhost:8080/angularincreasepercent";
  private zzerotrafficUrl = "http://localhost:8080/zerotraffic";
  constructor(private http: HttpClient) {}

  statusCodeAnalyse(data: {
    startDate: string;
    endDate: string;
  }): Observable<StatusCount[]> {
    return this.http.post<StatusCount[]>(this.statuscodeanalyse, data);
  }

  zerotraffic(data: {
    startDate: string;
    endDate: string;
  }): Observable<CombinedAIClientResponse> {
    return this.http.post<CombinedAIClientResponse>(this.zerotrafficUrl, data);
  }

  zzerotraffic(data: {
    startDate: string;
    endDate: string;
  }): Observable<zCombinedAIClientResponse> {
    return this.http.post<zCombinedAIClientResponse>(
      this.zzerotrafficUrl,
      data
    );
  }

  percentincreases(data: {
    startDate: string;
    endDate: string;
  }): Observable<CombinedAIClientResponse> {
    return this.http.post<CombinedAIClientResponse>(this.percentincrease, data);
  }

  percentdecreases(data: {
    startDate: string;
    endDate: string;
  }): Observable<ClientCount[]> {
    return this.http.post<ClientCount[]>(this.percentincrease, data);
  }

  sendMessage(message: string) {
    return this.http.post(this.apiUrl, { message }, { responseType: "text" });
  }
}
