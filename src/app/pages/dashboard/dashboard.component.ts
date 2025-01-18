import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { WidgetComponent } from "../../components/widget/widget.component";
import { widget } from '../../../models/dashboard';
import { SupscribersComponent } from './widgets/supscribers/supscribers.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatMenuModule } from '@angular/material/menu'
import {wrapGrid} from 'animate-css-grid';
import {CdkDragDrop, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent,MatButtonModule,MatIcon,MatMenuModule,CdkDropList,CdkDropListGroup],
  providers:[DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  store=inject(DashboardService);
  dashboard= viewChild.required<ElementRef>('dashboard');
  

  ngOnInit(): void {
    wrapGrid(this.dashboard().nativeElement,{duration:300});
  }
  drop(event: CdkDragDrop<number,any>){

  }
}
