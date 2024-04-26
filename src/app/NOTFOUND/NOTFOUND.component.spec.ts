/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NOTFOUNDComponent } from './NOTFOUND.component';

describe('NOTFOUNDComponent', () => {
  let component: NOTFOUNDComponent;
  let fixture: ComponentFixture<NOTFOUNDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NOTFOUNDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NOTFOUNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
