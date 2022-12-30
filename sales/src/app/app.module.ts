import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { SalesListComponent } from './sales-list/sales-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesDetailsComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
