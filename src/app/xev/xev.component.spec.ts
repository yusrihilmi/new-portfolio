import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XevComponent } from './xev.component';

describe('XevComponent', () => {
  let component: XevComponent;
  let fixture: ComponentFixture<XevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
