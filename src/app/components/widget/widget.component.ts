import { Component, input } from '@angular/core';
import { widget } from '../../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

  data=input.required<widget>();
}
