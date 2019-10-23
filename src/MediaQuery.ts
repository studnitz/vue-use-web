import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export function useMediaQuery(mediaQueryString: string) {
  const matchMediaQuery = window.matchMedia(mediaQueryString);

  const matches = ref(matchMediaQuery.matches);

  const onChange = () => (matches.value = matchMediaQuery.matches);

  onMounted(() => matchMediaQuery.addEventListener('change', onChange));

  onUnmounted(() => matchMediaQuery.removeEventListener('change', onChange));

  return matches;
}
