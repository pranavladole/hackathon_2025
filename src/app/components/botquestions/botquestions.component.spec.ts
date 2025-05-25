import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotquestionsComponent } from './botquestions.component';

describe('BotquestionsComponent', () => {
  let component: BotquestionsComponent;
  let fixture: ComponentFixture<BotquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotquestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
