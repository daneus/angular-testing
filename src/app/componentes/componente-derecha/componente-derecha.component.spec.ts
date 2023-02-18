import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDerechaComponent } from './componente-derecha.component';

describe('ComponenteDerechaComponent', () => {
  let component: ComponenteDerechaComponent;
  let fixture: ComponentFixture<ComponenteDerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDerechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
