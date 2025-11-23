import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import { SocialPage as NonOptimizedSocialPage } from '@/pages/social/non-optimized/SocialPage';
import { SocialPage as OptimizedSocialPage } from '@/pages/social/optimized/SocialPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: 'social-non-optimized',
    Component: NonOptimizedSocialPage,
  },
  {
    path: 'social-optimized',
    Component: OptimizedSocialPage,
  },
]);

export default router;
