import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@UntilDestroy()
@Component({
  selector: 'sales-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sales';

  singleSpaProps!: SingleSpaProps;

  ngOnInit(): void {
    singleSpaPropsSubject.pipe(untilDestroyed(this)).subscribe(
      props => (this.singleSpaProps = props),
    );
  }

  // OR if you don't need to access `singleSpaProps` inside the component
  // then create `Observable` property and use it in template with `async` pipe.
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}

