import {ButtonConfigurationOptions} from '../../button/foundation/configuation/button-configuration-options';
import {ButtonConfiguration} from '../../button/foundation/configuation/button-configuration';

export const Button = (options: ButtonConfigurationOptions) =>
  function (target: Object, propertyKey: string) {
    let value = new ButtonConfiguration(options);

    function get() {
      return value;
    }

    function set(newValue) {
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {get, set});
  };
