import { Component } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sidenav';
  showSidenav: boolean = false;
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Obtém o primeiro segmento da rota atual (a parte após a barra inicial)
        const routeSegment = this.route.snapshot.firstChild?.url[0]?.path;

        // Verifica se a rota atual é a rota de login
        this.showSidenav = routeSegment !== 'login';
      }
    });
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
