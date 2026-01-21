import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'tr'], // Desteklediğin diller
  defaultLocale: 'en'    // Varsayılan dil
});
 
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);