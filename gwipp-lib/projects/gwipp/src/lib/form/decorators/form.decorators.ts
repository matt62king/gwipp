import {FormConfigurationOptions} from '../foundation/configuration/form-configuration-options';
import {FormConfiguration} from '../foundation/configuration/form-configuration';

export const Form = (options: FormConfigurationOptions) =>
  (target: object, propertyKey: string) => {
    let value = new FormConfiguration(options);

    const get = (): FormConfiguration => {
      return value;
    };

    const set = (newValue: FormConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
