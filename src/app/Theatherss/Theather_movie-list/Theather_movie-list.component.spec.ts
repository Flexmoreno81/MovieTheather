/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Theather_movieListComponent } from './Theather_movie-list.component';

describe('Theather_movieListComponent', () => {
  let component: Theather_movieListComponent;
  let fixture: ComponentFixture<Theather_movieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theather_movieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theather_movieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
