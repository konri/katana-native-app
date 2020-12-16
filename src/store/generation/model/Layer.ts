import { SelectPathType } from './SelectPathType';
import { BlendMode } from './BlendMode';

export interface Layer {
  name: string;
  opacity: number;
  type: SelectPathType;
  path: string;
  sequencePrefix: string;
  blendMode: { value: BlendMode; label: BlendMode };
}
