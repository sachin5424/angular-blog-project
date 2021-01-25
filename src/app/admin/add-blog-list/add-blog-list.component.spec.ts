import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogListComponent } from './add-blog-list.component';

describe('AddBlogListComponent', () => {
  let component: AddBlogListComponent;
  let fixture: ComponentFixture<AddBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
