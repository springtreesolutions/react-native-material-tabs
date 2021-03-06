// @flow

import React from 'react';
import { StyleSheet } from 'react-native';
import { TabBody, TabButton, TabText } from './styles';
import type { StyleObj } from '../../lib/definitions';

type TabProps = {
  allowFontScaling: boolean,
  text: string,
  tabWidth: number,
  tabHeight: number,
  stretch: boolean,
  activeTextColor: string,
  inActiveTextColor: string,
  active?: boolean,
  textStyle: StyleObj,
  uppercase: boolean,
  activeTextStyle?: StyleObj,
  onPress?: () => void,
};

const Tab = ({
  allowFontScaling,
  activeTextColor,
  active,
  onPress,
  text,
  inActiveTextColor,
  tabWidth,
  tabHeight,
  stretch,
  textStyle,
  uppercase,
  activeTextStyle,
}: TabProps) => {
  const color = active ? activeTextColor : inActiveTextColor;

  return (
    <TabButton
      onPress={onPress}
      tabWidth={tabWidth}
      stretch={stretch}
      active={active}
    >
      <TabBody tabHeight={tabHeight}>
        <TabText
          color={color}
          style={StyleSheet.flatten([textStyle, activeTextStyle])}
          allowFontScaling={allowFontScaling}
        >
          {uppercase ? text.toUpperCase() : text}
        </TabText>
      </TabBody>
    </TabButton>
  );
};

export default Tab;
