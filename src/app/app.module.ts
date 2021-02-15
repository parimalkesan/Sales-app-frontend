import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesrepComponent } from './salesrep/salesrep.component';
import { SalesrepperformanceComponent } from './salesrepperformance/salesrepperformance.component';
import { DrugperformanceComponent } from './drugperformance/drugperformance.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SalesrepComponent,
    SalesrepperformanceComponent,
    DrugperformanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
