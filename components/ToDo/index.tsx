import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ItemType } from '../../types/common';
import { CheckBox } from '@rneui/themed';
import { CloseButton, ToDoView, CloseText, TextWrapper, CheckedText, ItemText } from './styles';

type ToDoProps = {
  item: ItemType;
  deleteItem: (v: string) => void;
  toggleCompleted: (isChecked: boolean, id: string) => void;
};

export const ToDo: React.FC<ToDoProps> = ({ item, deleteItem, toggleCompleted }) => {
  const [checked, setChecked] = useState(item.isCompleted);
  const toggleCheckbox = () => {
    setChecked(!checked);
    toggleCompleted(!checked, item.id);
  };

  useEffect(() => {
    setChecked(item.isCompleted);
  }, [item.isCompleted]);

  return (
    <ToDoView>
      <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={'checkbox-blank-outline'}
        style={{ marginRight: '20px' }}
      />
      <TextWrapper>
        {checked ? <CheckedText>{item.name}</CheckedText> : <ItemText>{item.name}</ItemText>}
        <CloseButton onPress={() => deleteItem(item.id)}>
          <CloseText>x</CloseText>
        </CloseButton>
      </TextWrapper>
    </ToDoView>
  );
};
