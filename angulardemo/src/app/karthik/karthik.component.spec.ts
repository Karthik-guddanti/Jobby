import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarthikComponent } from './karthik.component';

describe('KarthikComponent', () => {
  let component: KarthikComponent;
  let fixture: ComponentFixture<KarthikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarthikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarthikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
