import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhapsodieComponent } from './rhapsodie.component';

describe('RhapsodieComponent', () => {
  let component: RhapsodieComponent;
  let fixture: ComponentFixture<RhapsodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhapsodieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RhapsodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
