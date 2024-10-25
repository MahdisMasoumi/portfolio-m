import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulRainbowComponent } from './mindful-rainbow.component';

describe('MindfulRainbowComponent', () => {
  let component: MindfulRainbowComponent;
  let fixture: ComponentFixture<MindfulRainbowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfulRainbowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindfulRainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
