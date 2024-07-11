import type en from '~/locale/en.json';

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object ? K | `${K}.${NestedKeys<T[K]>}` : K;
}[keyof T];

export default function useT(localizationKey: NestedKeys<typeof en>, options?: any) {
  const { $i18n } = useNuxtApp();
  const $t = $i18n.t.bind($i18n);
  return $t(localizationKey, options) as string;
}
