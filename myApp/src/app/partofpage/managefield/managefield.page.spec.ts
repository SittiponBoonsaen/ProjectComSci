import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagefieldPage } from './managefield.page';

describe('ManagefieldPage', () => {
  let component: ManagefieldPage;
  let fixture: ComponentFixture<ManagefieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefieldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagefieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
