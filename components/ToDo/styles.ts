import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const ToDoView = styled(View)`
  flex-direction: row;
  font-size: 24px;
  font-weight: 300;
  color: #4d4d4d;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ededed;
`;

export const TextWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const ItemText = styled(Text)`
  color: #4d4d4d;
  font-size: 20px;
`;

export const CheckedText = styled(Text)`
  text-decoration: line-through;
  color: #d9d9d9;
  font-size: 20px;
`;

export const CloseButton = styled(Pressable)`
  margin-right: 20px;
  padding: 2px 5px;
  color: rgba(175, 47, 47, 0.2);
`;

export const CloseText = styled(Text)`
  font-size: 24px;
  margin-bottom: 5px;
  color: rgba(175, 47, 47, 0.2);
`;
