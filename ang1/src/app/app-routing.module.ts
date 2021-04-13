import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecDashboardComponent } from './page/exec-dashboard/execDashboard.component';
import { CaseCenterComponent } from './page/case-center/caseCenter.component';
import { MaskStopLineComponent } from './page/mask-stop-line/maskStopLine.component';

const routes: Routes = [
  { path: 'execDashboard', component: ExecDashboardComponent },
  { path: 'caseCenter', component: CaseCenterComponent },
  { path: 'maskStopLine', component: MaskStopLineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }