import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOAPPComponent } from './todoapp.component';

describe('TODOAPPComponent', () => {
  let component: TODOAPPComponent;
  let fixture: ComponentFixture<TODOAPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TODOAPPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TODOAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
