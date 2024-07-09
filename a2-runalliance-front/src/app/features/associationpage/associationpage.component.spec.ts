import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationpageComponent } from './associationpage.component';

describe('AssociationpageComponent', () => {
  let component: AssociationpageComponent;
  let fixture: ComponentFixture<AssociationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
