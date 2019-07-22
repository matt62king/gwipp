import {Component, Input, OnInit} from '@angular/core';
import {Icon} from '../../../../projects/gwipp/src/lib/icon/decorators/icon.decorator';
import {IconNames} from '../../../../projects/gwipp/src/lib/icon/icon/constants/icon-names';
import {IconConfiguration} from 'gwipp/lib/icon/foundation/config/icon-configuration';
import {Patch} from 'grippio-gstate';
import {StateKeys} from '../../state/state-keys';
import {PortletsState} from '../../state/portlets.state';
import {IconSize} from '../../../../projects/gwipp/src/lib/icon/icon/constants/icon-size';

@Component({
  selector: 'app-portlet-action-menu',
  templateUrl: './portlet-action-menu.component.html'
})
export class PortletActionMenuComponent implements OnInit {

  @Icon({name: IconNames.WINDOW_CLOSE, size: IconSize.LG})
  closeIcon: IconConfiguration;

  @Input() portletKey: string;

  constructor() {
  }

  ngOnInit() {
  }

  @Patch(StateKeys.PORTLET_STATE) removePortlet = (key: string): PortletsState => ({[key]: false});
}
