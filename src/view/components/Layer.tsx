import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import Select from 'react-select';
import {
  ContainerLabel,
  ContainerLayer,
  InputText,
} from './styled-components/HomePageStyles';
import { Layer } from '../../store/generation/model/Layer';
import {
  removeLayer,
  setValueLayer,
} from '../../store/generation/generation.action';
import { SelectPathType } from '../../store/generation/model/SelectPathType';
import { BlendModePossible } from '../../store/generation/model/BlendMode';
import { SelectPath } from './SelectPath';
import { ButtonIcon, ButtonType } from './ButtonIcon';
import { IconType } from './Icon';
import { Store } from '../../store/rootReducer';

export interface LayerComponentProps {
  index: number;
  layer: Layer;
}

const RadioText = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  padding-left: 5px;
`;

const StyleContainer = styled.div`
  width: 250px;
`;
export const LayerComponent = ({ index, layer }: LayerComponentProps) => {
  const dispatch = useDispatch();
  const generate = useSelector((state: Store) => state.generation.generate);

  const { name, opacity, type, sequencePrefix, path, blendMode } = layer;
  return (
    <ContainerLayer>
      <div className="d-flex flex-column flex-lg-row">
        <div className="w-50 mr-3">
          <ContainerLabel>Layer name</ContainerLabel>
          <InputText
            error={generate && name.length === 0}
            className="w-100"
            placeholder="ex. Background"
            value={name}
            onChange={(val) =>
              dispatch(setValueLayer(index, 'name', val.target.value))
            }
          />
        </div>
        <div className="d-flex w-50 flex-column">
          <label>
            <input
              type="radio"
              value={SelectPathType.main}
              checked={type === SelectPathType.main}
              onChange={(val) =>
                dispatch(setValueLayer(index, 'type', val.target.value))
              }
            />
            <RadioText>Main</RadioText>
          </label>
          <label>
            <input
              type="radio"
              value={SelectPathType.directory}
              checked={type === SelectPathType.directory}
              onChange={(val) =>
                dispatch(setValueLayer(index, 'type', val.target.value))
              }
            />
            <RadioText>Directory</RadioText>
          </label>
          <label>
            <input
              type="radio"
              value={SelectPathType.singleFile}
              checked={type === SelectPathType.singleFile}
              onChange={(val) =>
                dispatch(setValueLayer(index, 'type', val.target.value))
              }
            />
            <RadioText>Single file</RadioText>
          </label>
        </div>
      </div>
      {type === SelectPathType.directory && (
        <div className="d-flex flex-column flex-lg-row mt-3 align-items-start">
          <div className="w-50 mr-3">
            <ContainerLabel>Sequence prefix</ContainerLabel>
            <InputText
              error={generate && name.length === 0}
              className="w-100"
              placeholder="ex. 2SHADOW"
              value={sequencePrefix}
              onChange={(val) =>
                dispatch(
                  setValueLayer(index, 'sequencePrefix', val.target.value)
                )
              }
            />
          </div>
        </div>
      )}
      <div className="d-flex flex-column flex-lg-row mt-3 align-items-start">
        <div className="w-50 mr-3">
          <ContainerLabel>Opacity</ContainerLabel>
          <InputRange
            maxValue={1}
            minValue={0}
            step={0.01}
            onChange={(val) =>
              dispatch(setValueLayer(index, 'opacity', val as number))
            }
            value={opacity}
          />
        </div>
        <div className="d-flex w-50">
          <StyleContainer>
            <ContainerLabel>Blend mode</ContainerLabel>
            <Select
              value={blendMode}
              options={BlendModePossible}
              onChange={(val) =>
                dispatch(setValueLayer(index, 'blendMode', val))
              }
            />
          </StyleContainer>
        </div>
      </div>

      <div className="d-flex w-100 flex-column flex-lg-row mt-3 align-items-start">
        <SelectPath
          error={generate && (path?.length === 0 || path == null)}
          id={index}
          path={path}
          type={type}
        />
      </div>
      <div className="d-flex w-100 mt-3 justify-content-center">
        <ButtonIcon
          icon={IconType.trash}
          type={ButtonType.danger}
          onClick={() => dispatch(removeLayer(index))}
        >
          Remove
        </ButtonIcon>
      </div>
    </ContainerLayer>
  );
};
