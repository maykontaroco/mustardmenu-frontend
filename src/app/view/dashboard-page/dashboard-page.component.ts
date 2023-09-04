import {Component} from '@angular/core';
import {Dashboard} from "../../model/dashboard";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  dashValuesToday: Dashboard[] = [
    {
      type: 'MONEY',
      description: 'Valor em vendas',
      value: 0,
    },
    {
      type: 'UNIT',
      description: 'Vendas',
      value: 0,
    },
    {
      type: 'UNIT',
      description: 'Produtos vendidos',
      value: 0,
    },
    {
      type: 'MONEY',
      description: 'Ticket médio',
      value: 0,
    },
  ];
  dashValuesWeek: Dashboard[] = [
    {
      type: 'MONEY',
      description: 'Valor em vendas',
      value: 0,
    },
    {
      type: 'UNIT',
      description: 'Vendas',
      value: 0,
    },
    {
      type: 'UNIT',
      description: 'Produtos vendidos',
      value: 0,
    },
    {
      type: 'MONEY',
      description: 'Ticket médio',
      value: 0,
    },
  ];

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
