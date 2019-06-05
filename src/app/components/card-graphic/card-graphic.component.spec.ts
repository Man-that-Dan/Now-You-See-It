import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraphicComponent } from './card-graphic.component';

describe('CardGraphicComponent', () => {
  let component: CardGraphicComponent;
  let fixture: ComponentFixture<CardGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
