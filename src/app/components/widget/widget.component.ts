import { Component, input, signal } from '@angular/core';
import { widget } from '../../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';
import { CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widget',
  imports: [
    NgComponentOutlet,
    MatButtonModule,
    MatIcon,
    WidgetOptionsComponent,
    CdkDrag,
    CdkDragPlaceholder
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + " / span " + (data().columns ?? 1)',
  },
})
export class WidgetComponent {
  data = input.required<widget>();

  showOptions = signal(false);
}
