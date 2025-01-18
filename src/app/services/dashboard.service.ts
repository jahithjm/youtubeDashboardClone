import { computed, effect, Injectable, signal } from '@angular/core';
import { widget } from '../../models/dashboard';
import { SupscribersComponent } from '../pages/dashboard/widgets/supscribers/supscribers.component';
import { ViewesComponent } from '../pages/dashboard/widgets/viewes/viewes.component';
import { RevenueComponent } from '../dashboard/widgets/revenue/revenue.component';
import { TimelineComponent } from '../dashboard/widgets/timeline/timeline.component';
import { json } from 'node:stream/consumers';

@Injectable()
export class DashboardService {

  widgets=signal<widget[]>([
    {
      id:1,
      label:'Subscribers',
      content: SupscribersComponent,
      rows:1,
      columns:1,
      backgroundColor:'#003f5c',
      color:'white'
    },
    {
      id:2,
      label:'Views',
      content: ViewesComponent,
      rows:1,
      columns:1,
      backgroundColor:'#003f5c',
      color:'white'
    }
    ,{
      id:3,
      label:'Revenue',
      content: RevenueComponent,
      rows:1,
      columns:1,
      backgroundColor:'#003f5c',
      color:'white'

    }
    ,{
      id:4,
      label:'Timeline',
      content: TimelineComponent,
      rows:1,
      columns:1,
      backgroundColor:'#003f5c',
      color:'white'

    }

  ]);

    addedWidgets=signal<widget[]>([

    ]);

    widgetsToAdd = computed( ()=>{
      const addIds=this.addedWidgets().map(w=>w.id);
      return this.widgets().filter(w=>!addIds.includes(w.id));
    })

    fetchWidget(){
      const widgetAsString= localStorage.getItem('DasboardWidget')

      if (widgetAsString){

        const widgets = JSON.parse(widgetAsString) as widget[];
        widgets.forEach(widget=>{
          const content= this.widgets().find(w=>w.id==widget.id)?.content;

          if (content){
            widget.content=content;

          }
        })
        this.addedWidgets.set(widgets);
      }
    }
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

    removeWidget(id:number){
      this.addedWidgets.set(this.addedWidgets().filter(w=>w.id!==id));

    }
  constructor() {
    this.fetchWidget();
    
  }

  saveWidget= effect(()=>{
    const widegtsWithoutContent:Partial<widget>[]=this.addedWidgets().map(w=>({...w}));
    widegtsWithoutContent.forEach(w=>{
      delete w.content;
    });

    localStorage.setItem('DasboardWidget',JSON.stringify(widegtsWithoutContent));
  })
}
