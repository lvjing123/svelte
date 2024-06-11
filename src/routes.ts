import Login from './views/public/Login.svelte'
import AdminIndex from './views/admin/index.svelte'
import Users from './views/user/Users.svelte';

const routes = {
  '/': Login,
  '/login': Login,
  '/home': AdminIndex,
  '/users': Users,
}

export default routes;