import uuid from 'react-native-uuid';
import { ItemType } from '../types/common';

export const generateItem = (name: string, isCompleted = false): ItemType => ({
  name,
  isCompleted,
  id: uuid.v4() as string,
});
