// @flow

import { Platform } from 'react-native';
import styled from 'styled-components';
import Button from '../Touchable';
import type { StyleObj } from '../../lib/definitions';

type TabBodyProps = {
  tabHeight: number,
};

export const TabBody = styled.View`
  height: ${(props: TabBodyProps) => props.tabHeight};
  align-items: center;
  justify-content: center;
  padding-horizontal: 12px;
`;

type TabButtonProps = {
  active: boolean,
};

export const TabButton = styled(Button)`
  flex: 1;
  padding-horizontal: 15;
  border-bottom-width: ${(props: TabButtonProps) => (props.active ? 2 : 0)};
`;

type TabTextProps = {
  color: string,
};

export const TabText = styled.Text`
  color: ${(props: TabTextProps) => props.color};
  font-weight: ${Platform.OS === 'ios' ? 500 : 400};
  font-family: ${Platform.OS === 'android' ? 'sans-serif-medium' : 'System'};
  font-size: 14;
  text-align: center;
  min-width: 100%;
`;
