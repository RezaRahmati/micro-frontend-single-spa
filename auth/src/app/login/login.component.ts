import { Component } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  formData: any = {
    email: 'reza@email.ca',
    password: '123'
  };

  constructor(
     private router: Router,
     private sessionService:SessionService
    ) { }

  async onSubmit(e:any) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      notify('Logged In Successfully', 'success', 2000);
      this.sessionService.startSession('jwtToken1');
    }, 500);
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }

}
