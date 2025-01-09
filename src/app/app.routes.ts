import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { HelpComponent } from './pages/help/help.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  }
  ,{
    path:'content',
    component:ContentComponent
  },
  {
    path: 'analytics',
    component:AnalysisComponent

  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path:'help',
    component:HelpComponent
  }


];
