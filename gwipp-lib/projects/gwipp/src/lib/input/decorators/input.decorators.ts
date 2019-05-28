import {InputConfiguration} from '../foundation/configuration/input-configuration';

export const InputConfig = (options: InputConfiguration) =>
  (target: object, propertyKey: string) => {
    let value = options;

    const get = (): InputConfiguration => {
      return value;
    };

    const set = (newValue: InputConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
