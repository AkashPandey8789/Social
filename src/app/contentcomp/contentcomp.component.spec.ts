import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcompComponent } from './contentcomp.component';

describe('ContentcompComponent', () => {
  let component: ContentcompComponent;
  let fixture: ComponentFixture<ContentcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
