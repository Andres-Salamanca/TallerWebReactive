import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsuairoComponent } from './search-usuairo.component';

describe('SearchUsuairoComponent', () => {
  let component: SearchUsuairoComponent;
  let fixture: ComponentFixture<SearchUsuairoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUsuairoComponent]
    });
    fixture = TestBed.createComponent(SearchUsuairoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
