import { computed, Injectable, signal } from '@angular/core';
import { widget } from '../../models/dashboard';
import { SupscribersComponent } from '../pages/dashboard/widgets/supscribers/supscribers.component';
import { ViewesComponent } from '../pages/dashboard/widgets/viewes/viewes.component';

@Injectable()
export class DashboardService {

  widgets=signal<widget[]>([
    {
      id:1,
      label:'Subscribers',
      content: SupscribersComponent
    },
    {
      id:2,
      label:'Views',
      content: ViewesComponent
    }

  ])

    addedWidgets=signal<widget[]>([

    ]);

    widgetsToAdd = computed( ()=>{
      const addIds=this.addedWidgets().map(w=>w.id);
      return this.widgets().filter(w=>!addIds.includes(w.id));
    })

    addWidget(widget: widget){
      this.addedWidgets.set([...this.addedWidgets(),{...widget}]);
    }
  constructor() { }
}
