import {FormConfiguration} from '../foundation/configuration/form-configuration';

export const Form = (options: FormConfiguration) =>
  (target: object, propertyKey: string) => {
    let value = options;

    const get = (): FormConfiguration => {
      return value;
    };

    const set = (newValue: FormConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
