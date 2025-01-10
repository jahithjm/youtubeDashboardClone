import { Component, input, signal } from '@angular/core';
import { widget } from '../../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet,MatButtonModule,MatIcon],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

  data=input.required<widget>();

  showOptions=signal(false);
}
