import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { APP_NAME } from './constants';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { SalesListComponent } from './sales-list/sales-list.component';

const routes: Routes = [
    { path: '', redirectTo:'list', pathMatch:'full' },
    { path: 'list', component: SalesListComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: SalesDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: APP_NAME }
  ]
})
export class AppRoutingModule { }
