import { ref } from '@vue/composition-api';
import { useMediaQuery } from './MediaQuery';

export function usePreferredColorScheme() {
  const prefersColorScheme = (scheme: string): boolean => useMediaQuery(`(prefers-color-scheme: ${scheme})`).value;

  const colorSchemes = ['dark', 'light', 'no-preference'];

  return ref(colorSchemes.find(scheme => prefersColorScheme(scheme)));
}
