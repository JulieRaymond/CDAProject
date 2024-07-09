import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCardComponent } from './run-card.component';

describe('RunCardComponent', () => {
  let component: RunCardComponent;
  let fixture: ComponentFixture<RunCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RunCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
