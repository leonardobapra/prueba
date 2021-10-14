import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlogeadoComponent } from './hlogeado.component';

describe('HlogeadoComponent', () => {
  let component: HlogeadoComponent;
  let fixture: ComponentFixture<HlogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlogeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HlogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
