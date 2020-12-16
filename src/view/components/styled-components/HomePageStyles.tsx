import React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../ButtonIcon';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.containerBackground};
  border-radius: 15px;
  padding: 10px 25px;
  min-width: 600px;
  max-width: 1000px;
`;

export const ContainerLabel = styled.span`
  font-family: Verdana;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

export const ContainerLayer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.layerContainerBackground};
  border-radius: 15px;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

export const CircularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circular = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.buttonPrimaryBackground};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1px;
`;

export interface InputDirectoryProps {
  error: boolean;
  theme: any;
}
export const InputDirectory = styled.div<InputDirectoryProps>`
  background-color: ${(props: InputTextProps) =>
    props.error ? '#fff6f6' : props.theme.body};
  border-color: ${(props) =>
    props.error ? '#e0b4b4' : 'rgba(34, 36, 38, 0.15)'};
  color: ${(props) => (props.error ? '#9f3a38' : props.theme.text)};

  border: 1px solid rgba(34, 36, 38, 0.15);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  user-select: none;
  overflow-y: scroll;
  min-height: 35px;
  flex: 1;
`;

export interface ButtonProps {
  buttonType: ButtonType;
}

function buttonBackgroundByType(type: ButtonType) {
  switch (type) {
    case ButtonType.danger:
      return '#FF647C';
    case ButtonType.success:
      return '#00C48C';
    case ButtonType.primary:
    default:
      return '#6979F8';
  }
}

function buttonHoverBackgroundByType(type: ButtonType) {
  switch (type) {
    case ButtonType.danger:
      return '#863743';
    case ButtonType.success:
      return '#015a41';
    case ButtonType.primary:
    default:
      return '#323a7a';
  }
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props: ButtonProps) =>
    buttonBackgroundByType(props.buttonType)};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 5px 5px 10px;

  &:hover {
    background: ${(props: ButtonProps) =>
      buttonHoverBackgroundByType(props.buttonType)};
  }
`;

export interface InputTextProps {
  error: boolean;
  theme: any;
}

export const InputText = styled.input<InputTextProps>`
  margin: 0;
  max-width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  outline: 0;
  text-align: left;
  line-height: 1.21428571em;
  padding: 0.67857143em 1em;
  border-width: 1px;
  border-style: solid;
  background-color: ${(props: InputTextProps) =>
    props.error ? '#fff6f6' : props.theme.body};
  border-color: ${(props) =>
    props.error ? '#e0b4b4' : 'rgba(34, 36, 38, 0.15)'};
  color: ${(props) => (props.error ? '#9f3a38' : props.theme.text)};
  border-radius: 0.28571429rem;
  -webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  -webkit-box-shadow: none;
  box-shadow: none;
  ::placeholder {
    color: ${(props) =>
      props.error ? '#9f3a38' : props.theme.placeholderText};
  }

  &:focus {
    border-color: #85b7d9;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px dashed #6979f8;
  margin-top: 5px;
  height: 100%;
  width: 2px;
`;
