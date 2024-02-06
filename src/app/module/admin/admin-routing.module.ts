import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MainComponent} from "./main/main.component";
import {PanelComponent} from "./panel/panel.component";

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'main', component: MainComponent },
    ],
  },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: 'main', component: MainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
