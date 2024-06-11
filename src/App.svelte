<script lang="ts">
  import Router, { push, location } from "svelte-spa-router";
  import routes from "./routes";
  import { loginUser } from "./store";
  function checkLogin() {
    if (
      $loginUser.password == "" &&
      !($location === "/" || $location === "/login")
    ) {
      push("/login");
    }
  }
</script>

<main>
  <Router {routes} on:routeLoading={checkLogin} />
</main>
