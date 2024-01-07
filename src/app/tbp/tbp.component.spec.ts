import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbpComponent } from './tbp.component';

describe('TbpComponent', () => {
  let component: TbpComponent;
  let fixture: ComponentFixture<TbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TbpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
