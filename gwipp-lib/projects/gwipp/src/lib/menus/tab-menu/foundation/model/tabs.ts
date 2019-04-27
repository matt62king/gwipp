import {TabItem} from './tab-item';

export const Tabs = (tabs: string[]) =>
  (target: Object, propertyKey: string) => {
    let tabItems: TabItem[] = [];

    tabs.forEach((tab, index) =>
      tabItems.push(new TabItem(index, tab))
    );

    function get() {
      return tabItems;
    }

    function set(newValue) {
      tabItems = newValue;
    }

    Object.defineProperty(target, propertyKey, {get, set});
  };
