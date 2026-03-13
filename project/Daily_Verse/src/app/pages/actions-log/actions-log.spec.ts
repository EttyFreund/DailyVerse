import { ComponentFixture, TestBed } from '@angular/core/testing';

import ActionsLog from './actions-log';

describe('ActionsLog', () => {
  let component: ActionsLog;
  let fixture: ComponentFixture<ActionsLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsLog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
