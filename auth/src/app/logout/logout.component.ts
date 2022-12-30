import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.stopSession();
    document.location.href = '/auth/login';
  }

}
