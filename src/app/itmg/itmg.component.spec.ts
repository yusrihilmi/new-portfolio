import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmgComponent } from './itmg.component';

describe('ItmgComponent', () => {
  let component: ItmgComponent;
  let fixture: ComponentFixture<ItmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItmgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
