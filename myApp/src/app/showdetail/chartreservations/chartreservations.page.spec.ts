import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartreservationsPage } from './chartreservations.page';

describe('ChartreservationsPage', () => {
  let component: ChartreservationsPage;
  let fixture: ComponentFixture<ChartreservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartreservationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartreservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
