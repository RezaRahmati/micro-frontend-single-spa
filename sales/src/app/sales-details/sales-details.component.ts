import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {

  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.http.get<any>(`${environment.apiUrl}/api/cart/${id}`)),
      untilDestroyed(this)

    ).subscribe(data => this.data = data)
  }

  async backClick() {
    await this.router.navigate(['/list']);
  }

}
