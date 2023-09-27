import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsuarioComponent } from './post-usuario.component';

describe('PostUsuarioComponent', () => {
  let component: PostUsuarioComponent;
  let fixture: ComponentFixture<PostUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostUsuarioComponent]
    });
    fixture = TestBed.createComponent(PostUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
