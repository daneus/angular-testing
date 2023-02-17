import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesBotonesTotalComponent } from './componentes-botones-total.component';

describe('ComponentesBotonesTotalComponent', () => {
  let component: ComponentesBotonesTotalComponent;
  let fixture: ComponentFixture<ComponentesBotonesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesBotonesTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesBotonesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
