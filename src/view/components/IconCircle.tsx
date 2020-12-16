import React from 'react';
import {
  Circular,
  CircularContainer,
} from './styled-components/HomePageStyles';
import { Icon } from './Icon';
import styled from 'styled-components';

export interface IconCircleProps {
  icon: any;
  children: any;
}

const Text = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const IconCircle = ({ icon, children }: IconCircleProps) => (
  <CircularContainer>
    <Circular>
      <Icon icon={icon} height={30}/>
    </Circular>
    <Text>{children}</Text>
  </CircularContainer>
);
