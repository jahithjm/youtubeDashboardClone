import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule } from '@angular/material/list';
import { RouterModule, Router } from '@angular/router';

export type MenuItem={
  icon:string;
  label:string;
  route:string;
}
@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule,MatIconModule,CommonModule,RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent implements OnInit {

  sideNavCollapsed =signal(false);

  @Input() set collapsed (val:boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems=signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'dashboard',
      route: '/'
    },
    {
      icon: 'list',
      label: 'Content',
      route: '/content'
    },
    {
      icon: 'person',
      label: 'comments',
      route: '/comments'
    },
    {
      icon: 'directions',
      label: 'Analytics',
      route: '/analytics'
    },

    {
      icon:'help',
      label: 'Help',
      route: '/help'
    }

  ]);

  profilePicSize=computed(()=>this.sideNavCollapsed()? '32':'100');

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.updateActiveRoute();
    });
  }

  updateActiveRoute() {
    const updatedMenuItems = this.menuItems().map(item => ({
      ...item,
      active: this.isActiveRoute(item.route)
    }));
    this.menuItems.set(updatedMenuItems);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
