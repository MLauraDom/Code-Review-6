import { ComponentFixture, TestBed } from '@angular/core/testing';


import { WasAddedComponent } from './was-added.component';

describe('WasAddedComponent', () => {
  let component: WasAddedComponent;
  let fixture: ComponentFixture<WasAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
