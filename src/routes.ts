import Home from './views/Home.svelte';
import Users from './views/Users.svelte';
// import Detail from './views/Detail.svelte';

const routes = {
  '/': Home,
  '/users': Users,
  // '/detail/:type/:id': Detail,
}

export default routes;