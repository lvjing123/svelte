<script lang="ts">
  import { loginUser } from "../../store";
  import { push } from "svelte-spa-router";

  const logout = () => {
    // console.log("dengh");
    $loginUser = { username: "", password: "" };
    push("/login");
    console.log($loginUser);
  };
</script>

<div class="app">
  <div class="header">
    <span>header</span>
    <span on:click={logout}>logout</span>
  </div>
  <section class="section">
    <slot></slot>
  </section>
</div>

<style lang="scss" scoped>
  .header {
    position: fixed;
    left: 0;
    right: 0;
    height: 64px;
    background-color: rebeccapurple;
    color: antiquewhite;
    line-height: 64px;
  }
</style>
