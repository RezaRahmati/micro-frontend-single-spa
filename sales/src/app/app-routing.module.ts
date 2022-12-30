import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { SalesListComponent } from './sales-list/sales-list.component';

const routes: Routes = [
    { path: '', redirectTo:'list', pathMatch:'full' },
    { path: 'list', component: SalesListComponent },
    { path: 'details/:id', component: SalesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/sales' }
  ]
})
export class AppRoutingModule { }
