import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitaComponent } from './capita.component';

describe('CapitaComponent', () => {
  let component: CapitaComponent;
  let fixture: ComponentFixture<CapitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
