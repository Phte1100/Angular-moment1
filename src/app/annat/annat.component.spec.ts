import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnatComponent } from './annat.component';

describe('AnnatComponent', () => {
  let component: AnnatComponent;
  let fixture: ComponentFixture<AnnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
