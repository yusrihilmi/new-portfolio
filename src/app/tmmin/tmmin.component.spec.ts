import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmminComponent } from './tmmin.component';

describe('TmminComponent', () => {
  let component: TmminComponent;
  let fixture: ComponentFixture<TmminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TmminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TmminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
