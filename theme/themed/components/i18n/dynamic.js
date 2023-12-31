import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { isDevelopment } from '../internal/is-development';
import { getMatchableLocales } from './get-matchable-locales';

export function importMessages(locale) {
  for (const matchableLocale of getMatchableLocales(locale)) {
    switch (matchableLocale.toLowerCase()) {
      case 'de':
        return import('./messages/all.de.js').then(mod => [mod.default]);
      case 'en-gb':
        return import('./messages/all.en-GB.js').then(mod => [mod.default]);
      case 'en':
        return import('./messages/all.en.js').then(mod => [mod.default]);
      case 'es':
        return import('./messages/all.es.js').then(mod => [mod.default]);
      case 'fr':
        return import('./messages/all.fr.js').then(mod => [mod.default]);
      case 'id':
        return import('./messages/all.id.js').then(mod => [mod.default]);
      case 'it':
        return import('./messages/all.it.js').then(mod => [mod.default]);
      case 'ja':
        return import('./messages/all.ja.js').then(mod => [mod.default]);
      case 'ko':
        return import('./messages/all.ko.js').then(mod => [mod.default]);
      case 'pt-br':
        return import('./messages/all.pt-BR.js').then(mod => [mod.default]);
      case 'zh-cn':
        return import('./messages/all.zh-CN.js').then(mod => [mod.default]);
      case 'zh-tw':
        return import('./messages/all.zh-TW.js').then(mod => [mod.default]);
    }
  }

  if (isDevelopment) {
    warnOnce('importMessages', `Unknown locale "${locale}" provided to importMessages`);
  }

  return Promise.resolve([]);
}
