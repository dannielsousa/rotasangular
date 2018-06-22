import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraremailComponent } from './alteraremail.component';

describe('AlteraremailComponent', () => {
  let component: AlteraremailComponent;
  let fixture: ComponentFixture<AlteraremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
