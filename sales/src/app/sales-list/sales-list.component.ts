import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  data !: {
    carts: Array<any>
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/api/cart`).pipe(untilDestroyed(this)).subscribe(data => this.data = data);
  }

}
