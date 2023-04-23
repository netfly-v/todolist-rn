import styled from 'styled-components/native';
import { Button, Pressable, Text, TextInput, View } from 'react-native';

export const AddToDoView = styled(View)`
  font-size: 40px;
  background: #fff;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ededed;
`;

export const CompleteAllButton = styled(Pressable)`
  border: none;
  align-items: center;
  padding-left: 5px;
`;

export const CompleteBtnText = styled(Text)`
  font-size: 30px;
  color: lightgray;
`;

export const AddInput = styled(TextInput)`
  font-size: 24px;
  font-weight: 300;
  padding: 10px 10px 10px 5px;
  border: none;
  width: 90%;
`;
