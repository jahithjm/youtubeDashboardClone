import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewesComponent } from './viewes.component';

describe('ViewesComponent', () => {
  let component: ViewesComponent;
  let fixture: ComponentFixture<ViewesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
