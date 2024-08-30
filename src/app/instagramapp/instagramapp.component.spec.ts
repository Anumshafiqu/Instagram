import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramappComponent } from './instagramapp.component';

describe('InstagramappComponent', () => {
  let component: InstagramappComponent;
  let fixture: ComponentFixture<InstagramappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstagramappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstagramappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
