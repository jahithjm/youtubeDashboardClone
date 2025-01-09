import { Component } from '@angular/core';
import { WidgetComponent } from "../../components/widget/widget.component";
import { widget } from '../../../models/dashboard';
import { SupscribersComponent } from './widgets/supscribers/supscribers.component';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  data: widget={
    id:1,
    label:'subscribers',
    content: SupscribersComponent

  }
}
