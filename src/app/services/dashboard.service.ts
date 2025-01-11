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
      content: SupscribersComponent,
      rows:2,
      columns:2
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

    updateWidget(id:number,widget:Partial<widget>){
      const index= this.addedWidgets().findIndex(w=>w.id === id);
      if(index !==-1){
        const newWidget=[...this.addedWidgets()];
        newWidget[index]={...newWidget[index],...widget};
        this.addedWidgets.set(newWidget);
      }

    }

    moveWidgetToRight(id: number){
      const index= this.addedWidgets().findIndex(w=>w.id === id);
      if(index === this.addedWidgets().length-1){
        return;
      }

      const newWidget = [...this.addedWidgets()];
      [newWidget[index],newWidget[index+1]]=[{...newWidget[index+1]},{...newWidget[index]}];
      this.addedWidgets.set(newWidget);
    }
    moveWidgetToLeft(id: number){
      const index= this.addedWidgets().findIndex(w=>w.id === id);
      if(index === 0){
        return;
      }

      const newWidget = [...this.addedWidgets()];
      [newWidget[index],newWidget[index-1]]=[{...newWidget[index-1]},{...newWidget[index]}];
      this.addedWidgets.set(newWidget);

    }
  constructor() { }
}
