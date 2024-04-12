import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInputComponent } from './live-input.component';

describe('LiveInputComponent', () => {
  let component: LiveInputComponent;
  let fixture: ComponentFixture<LiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
