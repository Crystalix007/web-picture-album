import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablePictureComponent } from './expandable-picture.component';

describe('ExpandablePictureComponent', () => {
  let component: ExpandablePictureComponent;
  let fixture: ComponentFixture<ExpandablePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandablePictureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandablePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
