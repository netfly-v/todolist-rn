import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TODOS_STORAGE } from '../../constants/common';
import { generateItem } from '../../helpers/common';
import { storage } from '../../helpers/storage';
import { ItemType, TYPE } from '../../types/common';
import { AddToDo } from '../AddToDo';
import { ToDo } from '../ToDo';
import { AppView, Title, ToDoBlock, Footer, FooterButton, ButtonText, ClearButton } from './styles';

export const Todolist: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>(
    storage.has(TODOS_STORAGE) ? (storage.get(TODOS_STORAGE) as unknown as ItemType[]) : []
  );
  const [type, setType] = useState(TYPE.ALL);

  const updateItems = (updatedItems: ItemType[]) => {
    setItems(updatedItems);
    storage.set(TODOS_STORAGE, updatedItems);
  };

  const clearAllItems = () => {
    setItems([]);
    storage.delete(TODOS_STORAGE);
  };

  const addItem = (value: string) => {
    updateItems([...items, generateItem(value)]);
  };

  const deleteItem = (deleteId: string) => {
    updateItems(items.filter((item: ItemType) => item.id !== deleteId));
  };

  const toggleCompleted = (isChecked: boolean, toggleId: string) => {
    updateItems(items.map((item: ItemType) => (item.id === toggleId ? { ...item, isCompleted: isChecked } : item)));
  };

  const completeAll = (isCompleted: boolean) => {
    updateItems(items.map((item: ItemType) => ({ ...item, isCompleted })));
  };

  const renderToDos = (itemsByType: ItemType[]) => (
    <FlatList
      data={itemsByType}
      renderItem={({ item }) => <ToDo item={item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />}
      keyExtractor={item => item.id}
    />
  );

  const renderToDosByType = () => {
    switch (type) {
      case TYPE.ALL:
        return renderToDos(items);
      case TYPE.ACTIVE:
        return renderToDos(items.filter((item: ItemType) => !item.isCompleted));
      case TYPE.COMPLETED:
        return renderToDos(items.filter((item: ItemType) => item.isCompleted));
      default:
        return null;
    }
  };

  return (
    <AppView>
      <Title>todos</Title>
      <View style={{ flex: 1, marginBottom: 20 }}>
        <AddToDo addItem={addItem} completeAll={completeAll} />
        {items.length ? (
          <ToDoBlock>
            {renderToDosByType()}
            <Text style={{ textAlign: 'center', color: '#777' }}>{items.length} items left</Text>
            {items.some((item: ItemType) => item.isCompleted === true) ? (
              <ClearButton onPress={() => updateItems(items.filter((item: ItemType) => !item.isCompleted))}>
                <ButtonText style={{ color: '#008BE3' }}>Clear completed</ButtonText>
              </ClearButton>
            ) : null}
            <Footer>
              <FooterButton onPress={() => setType(TYPE.ALL)}>
                <ButtonText>All</ButtonText>
              </FooterButton>
              <FooterButton onPress={() => setType(TYPE.ACTIVE)}>
                <ButtonText>Active</ButtonText>
              </FooterButton>
              <FooterButton onPress={() => setType(TYPE.COMPLETED)}>
                <ButtonText>Completed</ButtonText>
              </FooterButton>
              <FooterButton onPress={clearAllItems}>
                <ButtonText>Clear all</ButtonText>
              </FooterButton>
            </Footer>
          </ToDoBlock>
        ) : null}
      </View>
    </AppView>
  );
};
