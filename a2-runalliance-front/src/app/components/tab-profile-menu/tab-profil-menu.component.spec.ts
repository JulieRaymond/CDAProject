import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProfilMenuComponent } from './tab-profil-menu.component';

describe('TabProfilMenuComponent', () => {
  let component: TabProfilMenuComponent;
  let fixture: ComponentFixture<TabProfilMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabProfilMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabProfilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
