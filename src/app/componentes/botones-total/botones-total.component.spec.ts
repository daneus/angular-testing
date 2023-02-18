import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesTotalComponent } from './botones-total.component';

describe('BotonesTotalComponent', () => {
  let component: BotonesTotalComponent;
  let fixture: ComponentFixture<BotonesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
