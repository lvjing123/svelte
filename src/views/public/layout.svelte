<script lang="ts">
  import { loginUser } from "../../store";
  import { push, link, location } from "svelte-spa-router";
  const userPath = "/users";
  const homePath = "/home";
  const formPath = "/form";

  const username = $loginUser.username;
  const logout = () => {
    $loginUser = { username: "", password: "" };
    push("/login");
    console.log($loginUser);
  };
</script>

<div class="app">
  <div class="header">
    <span>{username}</span>
    <button on:click={logout}>logout</button>
  </div>

  <div class="base-conatiner">
    <div class="left-slider">
      <a
        class={$location === "/home" ? "router-a-active router-a" : "router-a"}
        href="/home"
        use:link={homePath}>Home</a
      >
      <a
        class={$location === "/users" ? "router-a-active router-a" : "router-a"}
        href="/users"
        use:link={userPath}>User</a
      >
      <a
        class={$location === "/form" ? "router-a-active router-a" : "router-a"}
        href="/form"
        use:link={formPath}>Form Example</a
      >
    </div>
    <div class="right-content">
      <slot></slot>
    </div>
  </div>
</div>

<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: column;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--base-header-height);
      background-color: var(--base-header-bg-color);
      color: var(-base-title-text-color);
      line-height: var(--base-header-height);
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      border-bottom: 1px solid var(--base-border-color);
    }
    .base-conatiner {
      position: relative;
      margin-top: calc(var(--base-header-height) + 1px);
      display: flex;
      width: 100vw;
      height: calc(100vh - var(--base-header-height) - 1px);
      .left-slider {
        width: 220px;
        background: var(--base-header-bg-color);
        border-right: 1px solid var(--base-border-color);
        padding: 24px 24px 0 0;
        height: 100%;
        .router-a {
          display: block;
          padding: 16px;
        }
        .router-a-active {
          background: linear-gradient(to bottom, #d7739f, #9f7fc9);
          border-radius: 0 30px 30px 0;
        }
      }
      .right-content {
        flex: 1;
        background-color: var(--base-content-bg-color);
        padding: 24px;
        height: 100%;
        overflow: auto;
      }
    }
  }
</style>
