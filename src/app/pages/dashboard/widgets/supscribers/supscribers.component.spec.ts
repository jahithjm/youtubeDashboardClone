import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupscribersComponent } from './supscribers.component';

describe('SupscribersComponent', () => {
  let component: SupscribersComponent;
  let fixture: ComponentFixture<SupscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupscribersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
