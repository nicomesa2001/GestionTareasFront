import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarUsuarioTareaComponent } from './modal-registrar-usuario-tarea.component';

describe('ModalRegistrarUsuarioTareaComponent', () => {
  let component: ModalRegistrarUsuarioTareaComponent;
  let fixture: ComponentFixture<ModalRegistrarUsuarioTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistrarUsuarioTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistrarUsuarioTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
