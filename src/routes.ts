import { RouteProps } from 'react-router-dom'

import { Home } from './pages/Home'
import { Suggested } from './pages/Suggested'

export type Routes = { [key: string]: RouteProps & { path: string } }

const routes: Routes = {
  home: {
    path: '/',
    component: Home,
  },
  suggested: {
    path: '/suggested',
    component: Suggested,
  },
}

export default routes
