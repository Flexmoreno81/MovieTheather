/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Movie_infoComponent } from './Movie_info.component';

describe('Movie_infoComponent', () => {
  let component: Movie_infoComponent;
  let fixture: ComponentFixture<Movie_infoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movie_infoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Movie_infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
