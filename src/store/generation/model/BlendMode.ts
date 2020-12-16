export const BlendModePossible = [
  { value: 'pass through', label: 'pass through' },
  { value: 'normal', label: 'normal' },
  { value: 'dissolve', label: 'dissolve' },
  { value: 'darken', label: 'darken' },
  { value: 'multiply', label: 'multiply' },
  { value: 'color burn', label: 'color burn' },
  { value: 'linear burn', label: 'linear burn' },
  { value: 'darker color', label: 'darker color' },
  { value: 'lighten', label: 'lighten' },
  { value: 'screen', label: 'screen' },
  { value: 'color dodge', label: 'color dodge' },
  { value: 'linear dodge', label: 'linear dodge' },
  { value: 'lighter color', label: 'lighter color' },
  { value: 'overlay', label: 'overlay' },
  { value: 'soft light', label: 'soft light' },
  { value: 'hard light', label: 'hard light' },
  { value: 'vivid light', label: 'vivid light' },
  { value: 'linear light', label: 'linear light' },
  { value: 'pin light', label: 'pin light' },
  { value: 'hard mix', label: 'hard mix' },
  { value: 'difference', label: 'difference' },
  { value: 'exclusion', label: 'exclusion' },
  { value: 'subtract', label: 'subtract' },
  { value: 'divide', label: 'divide' },
  { value: 'hue', label: 'hue' },
  { value: 'saturation', label: 'saturation' },
  { value: 'color', label: 'color' },
  { value: 'luminosity', label: 'luminosity' },
];

export type BlendMode = 'pass through' | 'normal' | 'dissolve' | 'darken' | 'multiply' |
  'color burn' | 'linear burn' | 'darker color' | 'lighten' | 'screen' | 'color dodge' |
  'linear dodge' | 'lighter color' | 'overlay' | 'soft light' | 'hard light' |
  'vivid light' | 'linear light' | 'pin light' | 'hard mix' | 'difference' | 'exclusion' |
  'subtract' | 'divide' | 'hue' | 'saturation' | 'color' | 'luminosity';
