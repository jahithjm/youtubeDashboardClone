import { Component, inject } from '@angular/core';
import { WidgetComponent } from "../../components/widget/widget.component";
import { widget } from '../../../models/dashboard';
import { SupscribersComponent } from './widgets/supscribers/supscribers.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent,MatButtonModule,MatIcon,MatMenuModule],
  providers:[DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  store=inject(DashboardService);

}
