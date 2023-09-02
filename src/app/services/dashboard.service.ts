import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Dashboard} from "../model/dashboard";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardTodayUri: string;
  private dashboardWeekUri: string;

  constructor(private http: HttpClient) {
    this.dashboardTodayUri = environment.urlApi + environment.basePath + '/dashboard/today';
    this.dashboardWeekUri = environment.urlApi + environment.basePath + '/dashboard/week';
  }

  getDashboardToday(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.dashboardTodayUri);
  }

  getDashboardWeek(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.dashboardWeekUri);
  }
}
