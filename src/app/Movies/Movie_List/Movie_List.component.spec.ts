/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Movie_ListComponent } from './Movie_List.component';

describe('Movie_ListComponent', () => {
  let component: Movie_ListComponent;
  let fixture: ComponentFixture<Movie_ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movie_ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Movie_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
