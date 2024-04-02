import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    'events',
    'events/:id',
    '/api/webhooks/clerk',
    '/api/webhooks/strapi',
    '/api/uploadthing'
  ]
});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};

