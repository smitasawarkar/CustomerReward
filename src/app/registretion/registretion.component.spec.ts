import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistretionComponent } from './registretion.component';

describe('RegistretionComponent', () => {
  let component: RegistretionComponent;
  let fixture: ComponentFixture<RegistretionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistretionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
