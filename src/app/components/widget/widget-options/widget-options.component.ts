  import { Component, inject, input } from '@angular/core';
  import { MatButtonModule } from '@angular/material/button';
  import { MatIcon } from '@angular/material/icon';
  import { model } from '@angular/core';
  import{ MatButtonToggleModule } from '@angular/material/button-toggle'
  import { WidgetComponent } from '../widget.component';
  import { widget } from '../../../../models/dashboard';
import { DashboardService } from '../../../services/dashboard.service';

  @Component({
    selector: 'app-widget-options',
    imports: [MatButtonModule,MatIcon,MatButtonToggleModule ],
    templateUrl: './widget-options.component.html',
    styleUrl: './widget-options.component.css'
  })
  export class WidgetOptionsComponent {
    showOptions= model<boolean>(false);

    data=input.required<widget>();

    store=inject(DashboardService)

  }
