import {InputConfigurationOptions} from '../foundation/configuration/input-configuration-options';
import {InputConfiguration} from '../foundation/configuration/input-configuration';

export const InputConfig = (options: InputConfigurationOptions) =>
  (target: object, propertyKey: string) => {
    let value = new InputConfiguration(options);

    const get = (): InputConfiguration => {
      return value;
    };

    const set = (newValue: InputConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
