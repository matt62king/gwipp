import {GridConfiguration} from './grid-configuration';

export const Grid = (options: GridConfiguration) =>
  (target: object, propertyKey: string) => {
    let value = options;

    const get = (): GridConfiguration => {
      return value;
    };

    const set = (newValue: GridConfiguration) => {
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {get, set});
  };
