import {ButtonConfigurationOptions} from '../../button/foundation/configuation/button-configuration-options';
import {ButtonConfiguration} from '../../button/foundation/configuation/button-configuration';
import {FormConfigurationOptions} from '../../form/foundation/configuration/form-configuration-options';
import {FormConfiguration} from '../../form/foundation/configuration/form-configuration';
import {InputConfigurationOptions} from '../../input/foundation/configuration/input-configuration-options';
import {InputConfiguration} from '../../input/foundation/configuration/input-configuration';

export const Button = (options: ButtonConfigurationOptions) =>
  (target: Object, propertyKey: string) => {
    let value = new ButtonConfiguration(options);

    function get() {
      return value;
    }

    function set(newValue) {
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {get, set});
  };

export const Form = (options: FormConfigurationOptions) =>
   (target: Object, propertyKey: string) => {
    let value = new FormConfiguration(options);

    function get() {
      return value;
    }

    function set(newValue) {
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {get, set});
  };

export const Ginput = (options: InputConfigurationOptions) =>
  (target: Object, propertyKey: string) => {
    let value = new InputConfiguration(options);

    function get() {
      return value;
    }

    function set(newValue) {
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {get, set});
  };
