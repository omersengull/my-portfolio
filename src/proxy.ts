// src/proxy.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Burası önemli: Tüm dilleri ve sayfaları kapsamalı
  matcher: ['/', '/(tr|en)/:path*']
};