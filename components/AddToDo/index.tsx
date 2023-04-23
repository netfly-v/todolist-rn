import React, { useState } from 'react';
import { AddInput, AddToDoView, CompleteAllButton, CompleteBtnText } from './styles';

type AddToDoProps = {
  addItem: (v: string) => void;
  completeAll: (v: boolean) => void;
};

export const AddToDo: React.FC<AddToDoProps> = ({ completeAll, addItem }) => {
  const [inputValue, setInputValue] = useState('');
  const [wasCompleted, setWasCompleted] = useState(false);

  const toggleComplete = () => {
    completeAll(!wasCompleted);
    setWasCompleted(!wasCompleted);
  };

  return (
    <AddToDoView>
      <CompleteAllButton onPress={toggleComplete}>
        <CompleteBtnText>⌄</CompleteBtnText>
      </CompleteAllButton>
      <AddInput
        value={inputValue}
        placeholder="What needs to be done?"
        placeholderTextColor="lightgray"
        onChangeText={setInputValue}
        onSubmitEditing={() => {
          addItem(inputValue);
          setInputValue('');
        }}
      />
    </AddToDoView>
  );
};
