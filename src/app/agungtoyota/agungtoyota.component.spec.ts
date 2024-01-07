import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgungtoyotaComponent } from './agungtoyota.component';

describe('AgungtoyotaComponent', () => {
  let component: AgungtoyotaComponent;
  let fixture: ComponentFixture<AgungtoyotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgungtoyotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgungtoyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
