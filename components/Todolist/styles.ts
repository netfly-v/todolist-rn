import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const AppView = styled(View)`
  font-family: 'Roboto';
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  height: auto;
`;

export const Title = styled(Text)`
  font-size: 80px;
  font-weight: 100;
  color: #af2f2f26;
`;

export const ToDoBlock = styled(View)`
  background-color: #fff;
  flex: 1;
`;

export const Footer = styled(View)`
  flex-direction: row;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FooterButton = styled(Pressable)`
  background: transparent;
  border: 1px solid rgba(175, 47, 47, 0.1);
  border-radius: 3px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 10px;
  max-width: 200px;
`;

export const ClearButton = styled(FooterButton)`
  border: none;
  margin-bottom: -10px;
`;

export const ButtonText = styled(Text)`
  font-size: 24px;
  color: #777;
`;
