import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
  DxDataGridModule, 
  DxButtonModule, 
  DxTextBoxModule, 
  DxValidatorModule, 
  DxLoadIndicatorModule, 
  DxFormModule, 
  DxScrollViewModule, 
  DxLoadPanelModule
} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleCardComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxButtonModule,
    DxLoadIndicatorModule,
    DxLoadPanelModule,
    DxFormModule,
    DxScrollViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
