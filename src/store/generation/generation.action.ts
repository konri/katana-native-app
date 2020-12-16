import { toast } from 'react-toastify';
import { ipcRenderer } from 'electron';
import { Action } from '../Action';
import { Store } from '../rootReducer';
import { Layer } from './model/Layer';
import { SelectPathType } from './model/SelectPathType';

export enum GenerationActionEnum {
  SET_OUTPUT_PATH = 'SET_OUTPUT_PATH',

  ADD_LAYER = 'ADD_LAYER',
  REMOVE_LAYER = 'REMOVE_LAYER',
  SET_VALUE_LAYER = 'SET_VALUE_LAYER',

  RESET = 'RESET',

  GENERATE = 'GENERATE',
}

export const setOutputPath = (
  path: string
): Action<GenerationActionEnum, string> => ({
  type: GenerationActionEnum.SET_OUTPUT_PATH,
  payload: path,
});

export const addLayer = (): Action<GenerationActionEnum, void> => ({
  type: GenerationActionEnum.ADD_LAYER,
});

export const reset = (): Action<GenerationActionEnum, void> => ({
  type: GenerationActionEnum.RESET,
});

export const generate = (): Action<GenerationActionEnum, void> => ({
  type: GenerationActionEnum.GENERATE,
});

export function startGenerate(dispatch, getState) {
  dispatch(generate());
  const state: Store = getState();
  const mainLayers = state.generation.layers.filter(
    (layer: Layer) => layer.type === SelectPathType.main
  );
  if (mainLayers.length === 0) {
    toast.error(
      'You need to provide one main layer which folder has sequences of images like 001, 002...'
    );
  }

  if (mainLayers.length > 1) {
    toast.error(
      "You can't provide more than one main layer, if you want to use sequence use Directory layer type"
    );
  }

  if (state.generation.output.length === 0) {
    toast.error('You must select output folder');
  }

  const errors = state.generation.layers.filter(
    (layer: Layer) => layer.name.length === 0 || layer.path?.length === 0
  );

  if (errors.length > 0) {
    toast.error('You need to provide all mandatory inputs');
  }

  if (
    errors.length === 0 &&
    mainLayers.length === 1 &&
    state.generation.output.length > 0
  ) {
    const id = new Date().getMilliseconds();
    const payload = state.generation;
    ipcRenderer.send('generate-layers', { id, payload });
  }
}

export const removeLayer = (
  index: number
): Action<GenerationActionEnum, number> => ({
  type: GenerationActionEnum.REMOVE_LAYER,
  payload: index,
});

export interface SetValueLayerPayload {
  index: number;
  key: string;
  value: string | number;
}

export const setValueLayer = (
  index: number,
  key: string,
  value: string | number
): Action<GenerationActionEnum, SetValueLayerPayload> => ({
  type: GenerationActionEnum.SET_VALUE_LAYER,
  payload: { index, key, value },
});

export type GenerationPayload = SetValueLayerPayload | number | string;
