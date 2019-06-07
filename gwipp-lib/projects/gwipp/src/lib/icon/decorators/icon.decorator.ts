import {IconConfiguration} from '../foundation/config/icon-configuration';

export const Icon = (options: IconConfiguration) =>
  (target: object, propertyKey: string) => {
    let value = options;

    const get = (): IconConfiguration => {
      return value;
    };

    const set = (newValue: IconConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
