import { Component, input } from '@angular/core';
import { widget } from '../../../models/dashboard';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

  data=input.required<widget>();
}
