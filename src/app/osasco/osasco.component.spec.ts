import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsascoComponent } from './osasco.component';

describe('OsascoComponent', () => {
  let component: OsascoComponent;
  let fixture: ComponentFixture<OsascoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsascoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
