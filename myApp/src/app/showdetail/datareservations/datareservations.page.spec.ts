import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatareservationsPage } from './datareservations.page';

describe('DatareservationsPage', () => {
  let component: DatareservationsPage;
  let fixture: ComponentFixture<DatareservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatareservationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatareservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
