import React from 'react';
import styled from 'styled-components';
import { Button } from './styled-components/HomePageStyles';
import { Icon, IconType } from './Icon';

export interface ButtonIconProps {
  onClick: () => void;
  children: any;
  icon: IconType;
  type?: ButtonType;
}

export enum ButtonType {
  primary = 'primary',
  success = 'success',
  danger = 'danger',
}

const Text = styled.div`
  padding-right: 10px;
`;
const IconWithSeparator = styled.div`
  border-left: 1px solid rgba(66, 66, 66, 0.6);
  padding-left: 2px;
`;

export const ButtonIcon = ({ type = ButtonType.primary, icon, onClick, children }: ButtonIconProps) => {
  return (
    <Button type="button" buttonType={type} onClick={onClick}>
      <Text>{children}</Text>
      <IconWithSeparator>
        <Icon icon={icon}/>
      </IconWithSeparator>
    </Button>
  );
};
