import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamcgiComponent } from './samcgi.component';

describe('SamcgiComponent', () => {
  let component: SamcgiComponent;
  let fixture: ComponentFixture<SamcgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamcgiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamcgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
