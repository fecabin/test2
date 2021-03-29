import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import '@cds/core/alert/register.js';
//import { CaseCenterService } from './service/caseCenter.service';

//Grid Custom detail
import { DetailCellRenderer } from './detail-cell-renderer.component';
 
 
import { AppRoutingModule } from './app-routing.module';   
      
import { ExecDashboardComponent } from './page/exec-dashboard/execDashboard.component';
import { CaseCenterComponent } from './page/case-center/caseCenter.component';

@NgModule({
  declarations: [
    AppComponent,DetailCellRenderer,ExecDashboardComponent,CaseCenterComponent
  ],
  imports: [
    BrowserModule, FormsModule,AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    AgGridModule.withComponents([DetailCellRenderer])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
