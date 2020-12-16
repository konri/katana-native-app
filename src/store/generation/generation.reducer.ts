import { Action } from '../Action';
import { GenerationActionEnum } from './generation.action';
import { Layer } from './model/Layer';
import { SelectPathType } from './model/SelectPathType';

export interface GenerationState {
  output: string;
  layers: Array<Layer>;
  generate: boolean;
}

const EMPTY_LAYER: Layer = {
  name: '',
  opacity: 1,
  type: SelectPathType.directory,
  path: '',
  sequencePrefix: '',
  blendMode: { value: 'normal', label: 'normal' },
};

const INITIAL_STATE: GenerationState = {
  output: '',
  layers: [EMPTY_LAYER],
  generate: false,
};

function removeItem(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function generationReducer(
  state = INITIAL_STATE,
  action: Action<GenerationActionEnum, any>
) {
  const { type, payload } = action;
  switch (type) {
    case GenerationActionEnum.SET_OUTPUT_PATH:
      return {
        ...state,
        output: payload,
      };
    case GenerationActionEnum.ADD_LAYER:
      return {
        ...state,
        layers: [
          ...state.layers,
          {
            ...EMPTY_LAYER,
          },
        ],
      };
    case GenerationActionEnum.REMOVE_LAYER:
      return {
        ...state,
        layers: removeItem(state.layers, payload),
      };
    case GenerationActionEnum.SET_VALUE_LAYER:
      const { index, key, value } = payload;
      return {
        ...state,
        layers: state.layers.map((item, i) => {
          if (i !== index) {
            // This isn't the item we care about - keep it as-is
            return item;
          }

          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            [key]: value,
          };
        }),
      };

    case GenerationActionEnum.RESET:
      return {
        ...INITIAL_STATE,
      };

    case GenerationActionEnum.GENERATE:
      return {
        ...state,
        generate: true,
      };

    default:
      return state;
  }
}
