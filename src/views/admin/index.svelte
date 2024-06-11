<script lang="ts">
  // router
  import { link } from "svelte-spa-router";
  import Layout from "../public/layout.svelte";
  import { loginUser } from "../../store";

  const userPath = "/users";
  const homePath = "/home";
  console.log($loginUser, "home");
</script>

<main>
  <Layout>
    <div class="base-container">
      <a class="m-r-5 active" href="" use:link={homePath}>Home</a>
      <a class="m-r-5 noactive" use:link={userPath}>User</a>
    </div>
  </Layout>
</main>

<style lang="scss" scoped>
  .base-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    .m-r-5 {
      margin-right: 5px;
    }
    .active {
      color: red;
    }
    .noactive {
      color: #000;
    }
  }
</style>
