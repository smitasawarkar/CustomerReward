import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPointComponent } from './reward-point.component';

describe('RewardPointComponent', () => {
  let component: RewardPointComponent;
  let fixture: ComponentFixture<RewardPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
