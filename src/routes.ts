import Login from './views/public/Login.svelte'
import AdminIndex from './views/admin/index.svelte'
import Users from './views/user/Users.svelte';
import FormExample from './views/form/FormExample.svelte';

const routes = {
  '/': Login,
  '/login': Login,
  '/home': AdminIndex,
  '/users': Users,
  '/form': FormExample
}

export default routes;