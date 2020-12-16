import React from 'react';
import chevron_icon from '../../assets/svg/chevron-right.svg';
import credit_icon from '../../assets/svg/credit-card.svg';
import file_icon from '../../assets/svg/file.svg';
import package_icon from '../../assets/svg/package.svg';
import plus_icon from '../../assets/svg/plus.svg';
import trash_icon from '../../assets/svg/trash-2.svg';
import generate_icon from '../../assets/svg/generate.svg';
import reset_icon from '../../assets/svg/reset.svg';
import styled from 'styled-components';


export enum IconType {
  chevron = 'chevron',
  credit = 'credit',
  file = 'file',
  'package' = 'package',
  plus = 'plus',
  trash = 'trash',
  generate = 'generate',
  reset = 'reset',
}

function getIconByType(icon: IconType): string {
  switch (icon) {
    case IconType.chevron:
      return chevron_icon;
    case IconType.credit:
      return credit_icon;
    case IconType.file:
      return file_icon;
    case IconType.package:
      return package_icon;
    case IconType.plus:
      return plus_icon;
    case IconType.trash:
      return trash_icon;
    case IconType.generate:
      return generate_icon;
    case IconType.reset:
      return reset_icon;
    default:
      return '';
  }
}

interface ImgProps {
  height?: number;
}

const Img = styled.img<ImgProps>`
  height: ${(props) => props.height ? props.height : 25}px;
`;

export const Icon = ({ icon, height }) => {
  const iconSrc = getIconByType(icon);
  return <Img src={iconSrc} height={height} alt="button icon"/>;
};
