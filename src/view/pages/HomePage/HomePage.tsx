import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../components/styled-components/Title';
import {
  Container,
  ContainerLabel,
  VerticalLine,
} from '../../components/styled-components/HomePageStyles';
import { IconCircle } from '../../components/IconCircle';
import { SelectPath } from '../../components/SelectPath';
import { IconType } from '../../components/Icon';
import { SelectPathType } from '../../../store/generation/model/SelectPathType';
import { Store } from '../../../store/rootReducer';
import {
  addLayer,
  reset,
  setOutputPath,
  setValueLayer,
  startGenerate,
} from '../../../store/generation/generation.action';
import { Layer } from '../../../store/generation/model/Layer';
import { LayerComponent } from '../../components/Layer';
import { ButtonIcon, ButtonType } from '../../components/ButtonIcon';

export const HomePage = () => {
  const dispatch = useDispatch();
  const outputPath = useSelector((state: Store) => state.generation.output);
  const layers = useSelector((state: Store) => state.generation.layers);

  useEffect(() => {
    ipcRenderer.on('dialog-selection', (event, { filePaths, id }) => {
      if (id === 'output') {
        dispatch(setOutputPath(filePaths[0]));
      } else {
        dispatch(setValueLayer(id, 'path', filePaths[0]));
      }
    });
  }, [dispatch]);

  const layersRender = layers.map((layer: Layer, index) => (
    <LayerComponent index={index} layer={layer} />
  ));
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 mt-4">
      <Title>Home dashboard</Title>
      <div className="d-flex flex-column w-75 h-100 mt-4">
        <div className="d-flex flex-row mb-4">
          <div className="d-flex flex-column justify-content-center align-items-center mr-5">
            <IconCircle icon={IconType.package}>Output</IconCircle>
            <VerticalLine />
          </div>
          <Container className="pb-4">
            <ContainerLabel>Choose folder for generation output</ContainerLabel>
            <SelectPath
              id="output"
              path={outputPath}
              type={SelectPathType.directory}
            />
          </Container>
        </div>

        <div className="d-flex flex-row mb-4">
          <div className="d-flex flex-column h-auto justify-content-center align-items-center mr-5">
            <IconCircle icon={IconType.credit}>Layers</IconCircle>
            <VerticalLine />
          </div>
          <Container className="pb-4">
            <ContainerLabel>Define Photoshop layers</ContainerLabel>
            {layersRender}
            <div className="d-flex w-100 justify-content-end">
              <ButtonIcon
                onClick={() => dispatch(addLayer())}
                icon={IconType.plus}
                type={ButtonType.success}
              >
                Add layer
              </ButtonIcon>
            </div>
          </Container>
        </div>

        <div className="d-flex flex-row mb-4">
          <div className="d-flex align-items-start justify-content-start mr-5">
            <IconCircle icon={IconType.file}>Output</IconCircle>
          </div>
          <Container className="pb-4">
            <ContainerLabel>
              Generate your psd files
              <div className="d-flex justify-content-end">
                <div className="d-flex flex-column">
                  <ButtonIcon
                    onClick={() => {
                      dispatch(startGenerate);
                    }}
                    icon={IconType.generate}
                    type={ButtonType.success}
                  >
                    Generate
                  </ButtonIcon>
                  <div className="d-flex mt-2" />
                  <ButtonIcon
                    onClick={() => dispatch(reset())}
                    icon={IconType.reset}
                    type={ButtonType.danger}
                  >
                    Reset
                  </ButtonIcon>
                </div>
              </div>
            </ContainerLabel>
          </Container>
        </div>
      </div>
    </div>
  );
};
