import store from 'react-native-simple-store';
import { ItemType } from '../types/common';

export const storage = {
  set(key: string, value: ItemType[]) {
    store.update(key, JSON.stringify(value));
  },
  get(key: string) {
    store.get(key).then((res: string) => {
      if (res) {
        return JSON.parse(res);
      } else {
        return null;
      }
    });
  },
  has(key: string) {
    return Boolean(this.get(key));
  },
  delete(key: string) {
    store.delete(key);
  },
};
