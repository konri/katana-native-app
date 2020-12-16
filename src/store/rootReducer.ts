import { combineReducers } from 'redux';
import { SettingsState } from './settings/model/SettingsState';
import settingsReducer from './settings/settingsReducer';
import { generationReducer, GenerationState } from './generation/generation.reducer';

export interface Store {
  settings: SettingsState;
  generation: GenerationState;
}

export default combineReducers<Store>({
  settings: settingsReducer,
  generation: generationReducer,
});
