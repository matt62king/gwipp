import {ButtonConfigurationOptions} from '../foundation/configuation/button-configuration-options';
import {ButtonConfiguration} from '../foundation/configuation/button-configuration';

export const Button = (options: ButtonConfigurationOptions) =>
  (target: object, propertyKey: string) => {
    let value = new ButtonConfiguration(options);

    const get = (): ButtonConfiguration => {
      return value;
    };

    const set = (newValue: ButtonConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
