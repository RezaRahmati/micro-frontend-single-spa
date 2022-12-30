import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCardComponent } from './single-card.component';

describe('SingleCardComponent', () => {
  let component: SingleCardComponent;
  let fixture: ComponentFixture<SingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
