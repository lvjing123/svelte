<script lang="ts">
  import { loginUser } from "../../store";
  import { push } from "svelte-spa-router";
  import { logigApi } from "../../api/api";
  let formValue = {
    username: "",
    password: "",
  };

  async function handleSubmit() {
    const res = await logigApi(formValue);
    console.log(res, "formValue");
    if (res) {
      // store
      loginUser.set(formValue);
      // redirect
      push("/home");
    }
  }
</script>

<main>
  <form on:submit|preventDefault={handleSubmit} class="form-container">
    <label class="item">
      username
      <input bind:value={formValue.username} />
    </label>
    <label class="item">
      password
      <input bind:value={formValue.password} type="password" />
    </label>

    <button type="submit"> Submit </button>
  </form>
</main>

<style lang="scss" scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    font-size: 16px;
    border: 1px solid rgb(227, 216, 216);
    padding: 24px;
    border-radius: 10px;
    box-shadow: inset;
    .item {
      height: 32px;
      line-height: 32px;
    }
  }
</style>
