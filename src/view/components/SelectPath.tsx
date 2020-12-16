import React, { useCallback } from 'react';
import { ipcRenderer } from 'electron';
import { InputDirectory } from './styled-components/HomePageStyles';
import { ButtonIcon } from './ButtonIcon';
import { SelectPathType } from '../../store/generation/model/SelectPathType';
import { IconType } from './Icon';

export interface SelectPathProps {
  id: string;
  path: string;
  type: SelectPathType;
  error: boolean;
}

export const SelectPath = ({ error, id, path, type }: SelectPathProps) => {
  const chooseCallback = useCallback(() => {
    ipcRenderer.send('open-dialog', { id, type });
  }, [id, type]);
  return (
    <div className="d-flex flex-row align-items-center justify-content-between w-100">
      <InputDirectory error={error}>
        {path || 'Select directory'}
      </InputDirectory>
      <ButtonIcon onClick={chooseCallback} icon={IconType.chevron}>
        Choose{' '}
        {type === SelectPathType.directory || type === SelectPathType.main
          ? 'folder'
          : 'file'}
      </ButtonIcon>
    </div>
  );
};
