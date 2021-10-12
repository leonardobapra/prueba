import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhistoryComponent } from './rhistory.component';

describe('RhistoryComponent', () => {
  let component: RhistoryComponent;
  let fixture: ComponentFixture<RhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
