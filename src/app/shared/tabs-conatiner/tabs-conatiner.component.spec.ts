import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsConatinerComponent } from './tabs-conatiner.component';

describe('TabsConatinerComponent', () => {
  let component: TabsConatinerComponent;
  let fixture: ComponentFixture<TabsConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsConatinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
