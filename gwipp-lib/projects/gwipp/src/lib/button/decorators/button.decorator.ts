import {ButtonConfiguration} from '../foundation/configuation/button-configuration';

export const Button = (options: ButtonConfiguration) =>
  (target: object, propertyKey: string) => {
    let value = options;

    const get = (): ButtonConfiguration => {
      return value;
    };

    const set = (newValue: ButtonConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
