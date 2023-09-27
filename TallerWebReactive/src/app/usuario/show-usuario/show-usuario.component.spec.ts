import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsuarioComponent } from './show-usuario.component';

describe('ShowUsuarioComponent', () => {
  let component: ShowUsuarioComponent;
  let fixture: ComponentFixture<ShowUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUsuarioComponent]
    });
    fixture = TestBed.createComponent(ShowUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
