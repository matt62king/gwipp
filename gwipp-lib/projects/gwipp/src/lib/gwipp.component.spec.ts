import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwippComponent } from './gwipp.component';

describe('GwippComponent', () => {
  let component: GwippComponent;
  let fixture: ComponentFixture<GwippComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwippComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwippComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
