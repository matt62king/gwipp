import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClickToEditComponent} from './click-to-edit.component';
import {IconModule} from '../../icon/icon.module';
import {EditMode} from '../../foundation/model/editMode';

describe('ClickToEditComponent', () => {
  let component: ClickToEditComponent;
  let fixture: ComponentFixture<ClickToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToEditComponent ],
      imports: [ IconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToEditComponent);
    component = fixture.componentInstance;
    component.id = '[test id]';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default readonly', () => {
    expect(component.state.editMode).toEqual(EditMode.READ_ONLY);
  });

  it('should switch to edit mode', () => {
    component.toggleEditMode();
    expect(component.state.editMode).toEqual(EditMode.EDIT);
  });

  it('should switch to edit mode with patch', () => {
    component.patchEditMode(EditMode.EDIT);
    expect(component.state.editMode).toEqual(EditMode.EDIT);
  });

  it('should toggle show edit option', () => {
    component.toggleShowEditOption();
    expect(component.showEditOption).toBeTruthy();
  })
});
