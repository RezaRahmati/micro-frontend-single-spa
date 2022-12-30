import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) { }

  async onSubmit(e: any) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      notify('Logged In Successfully', 'success', 2000);
      this.sessionService.startSession('jwtToken1');

      this.redirectToReturnUrl();

    }, 500);
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }

  redirectToReturnUrl() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '';
    console.log(returnUrl);
    if (!returnUrl) {
      returnUrl = '/home';
    }

    setTimeout(() => {
      document.location.href = returnUrl;
    }, 500);
  }

}
