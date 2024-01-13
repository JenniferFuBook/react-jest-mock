import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
// to support localized format options
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeList from 'dayjs/locale.json';

dayjs.extend(localizedFormat);

// 01/10/2024 6:10 PM
const formatDateTime = (time?: string | number) => dayjs(time).format('L LT');

// 6:10 PM
const formatTime = (time?: string | number) => dayjs(time).format('LT');

// Jan 10, 2024
const formatFullDate = (time?: string | number) => dayjs(time).format('ll');

// Jan 10, 2024 6:10 PM
const formatFullDateTime = (time?: string | number) =>
  dayjs(time).format('lll');

export interface DateUtils {
  locale: string;
  formatDateTime: (time?: number | string) => string;
  formatTime: (date?: number | string) => string;
  formatFullDate: (date?: number | string) => string;
  formatFullDateTime: (date?: number | string) => string;
}

/**
 * useDate supplies some useful methods and properties related to locale-based dates.
 */
const useDate: () => DateUtils = () => {
  const [currentLocale, setCurrentLocale] = useState('en');
  useEffect(() => {
    const importLocale = async () => {
      // retrieve all supported locales
      const supportedLocales = localeList.map(({ key }) => key);

      // get the closest supported locale
      const rawLocale = Intl.DateTimeFormat().resolvedOptions().locale ?? 'en';
      let locale = rawLocale.toLocaleLowerCase();
      while (locale.length > 0 && !supportedLocales.includes(locale)) {
        const lastIndex = locale.lastIndexOf('-');
        locale =
          lastIndex === -1 ? '' : locale.substring(0, locale.lastIndexOf('-'));
      }

      await import(`dayjs/locale/${locale}.js`);
      dayjs.locale(locale);
      setCurrentLocale(locale);
    };
    importLocale();
  }, []);

  return {
    locale: currentLocale,
    formatDateTime,
    formatTime,
    formatFullDate,
    formatFullDateTime,
  };
};

export default useDate;
