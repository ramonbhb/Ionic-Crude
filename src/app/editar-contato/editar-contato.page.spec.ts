import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarContatoPage } from './editar-contato.page';

describe('EditarContatoPage', () => {
  let component: EditarContatoPage;
  let fixture: ComponentFixture<EditarContatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarContatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
