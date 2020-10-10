import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddfieldPage } from './addfield.page';

describe('AddfieldPage', () => {
  let component: AddfieldPage;
  let fixture: ComponentFixture<AddfieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfieldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddfieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
