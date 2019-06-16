import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExpandableListComponent} from './expandable-list.component';
import {CommonModule} from '@angular/common';
import {ListTemplatesModule} from '../foundation/templates/list-templates.module';

describe('ExpandableListComponent', () => {
  let component: ExpandableListComponent;
  let fixture: ComponentFixture<ExpandableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableListComponent ],
      imports: [CommonModule, ListTemplatesModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map one item', () => {
    const mapped = [{$implicit: 'item'}];
    component.data = 'item';

    expect(component.context).toEqual(mapped);
  });

  it('should map multiple items', () => {
    const mapped = [{$implicit: 'item'}, {$implicit: 'item2'}];
    component.data = ['item', 'item2'];

    expect(component.context).toEqual(mapped);
  });

  it('should expand row', () => {
    const context = {$implicit: 'selected'};
    component.toggleExpanded(context);

    expect(component.isExpanded(context)).toBeTruthy();
  });

  it('should collapse row', () => {
    const context = {$implicit: 'selected'};
    component.selectedContext = context;
    component.toggleExpanded(context);

    expect(component.isExpanded(context)).toBeFalsy();
  });
});
