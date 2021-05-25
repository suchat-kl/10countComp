import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingComponetComponent } from './counting-componet.component';

describe('CountingComponetComponent', () => {
  let component: CountingComponetComponent;
  let fixture: ComponentFixture<CountingComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
