import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
 
export default getRequestConfig(async ({ requestLocale }) => {
  // `[locale]` parametresini alıyoruz
  let locale = await requestLocale;
 
  // Geçerli bir dil değilse varsayılanı kullanıyoruz
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    // Mesajları ilgili JSON dosyasından yüklüyoruz
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});