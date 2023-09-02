import {Component} from '@angular/core';
import {Dashboard} from "../../model/dashboard";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  dashValuesToday: Dashboard[] = [];
  dashValuesWeek: Dashboard[] = [];

  constructor(private dashboardService: DashboardService) {
    this.getDashboard();
  }

  getDashboard() {
    this.dashboardService.getDashboardToday().subscribe(value => {
      this.dashValuesToday = value;
    });

    this.dashboardService.getDashboardWeek().subscribe(value => {
      this.dashValuesWeek = value;
    });
  }
}
