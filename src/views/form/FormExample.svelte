<script lang="ts">
  // router
  import Layout from "../public/layout.svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";

  // for form
  let selectOptions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selectMulipty = [
    "Cookies and cream",
    "Mint choc chip",
    "Raspberry ripple",
  ];

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      selected: 1,
      answer: null,
      checked: false,
      flavours: ["Mint choc chip"],
      textarea: "",
      flavourSelectMulipty: ["Mint choc chip"],
    },
    validationSchema: yup.object().shape({
      selected: yup.string().required(),
      answer: yup.string().email().required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
</script>

<Layout>
  <p>example for form</p>
  <form on:submit|preventDefault={handleSubmit} class="form-container">
    <select
      id="selected"
      name="selected"
      bind:value={$form.selected}
      on:change={() => ($form.answer = null)}
      class="item"
    >
      {#each selectOptions as item}
        <option value={item.id}>
          {item.text}
        </option>
      {/each}
    </select>
    {#if $errors.selected}
      <small>{$errors.selected}</small>
    {/if}

    <input id="answer" name="answer" bind:value={$form.answer} class="item" />

    {#if $errors.answer}
      <small>{$errors.answer}</small>
    {/if}

    <label class="item">
      <input type="checkbox" bind:checked={$form.checked} />
      Yes! Send me regular email spam
    </label>

    <div class="item">
      {#each selectMulipty as flavour}
        <label>
          <input type="checkbox" bind:group={$form.flavours} value={flavour} />
          {flavour}
        </label>
      {/each}
    </div>
    <textarea class="item" bind:value={$form.textarea}></textarea>

    <div class="multiple-item-container">
      <select multiple bind:value={$form.flavourSelectMulipty}>
        {#each selectOptions as item}
          <option value={item.id}>
            {item.text}
          </option>
        {/each}
      </select>
    </div>

    <button class="button" type="submit"> Submit </button>
  </form>
</Layout>

<style lang="scss" scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid var(--base-border-color);
    box-shadow: 1px 1px 8px #337ca2;
    padding: 24px;
    .item {
      margin: 10px;
      text-align: left;
      border: 1px solid var(--base-primary-color);
      height: 32px;
      border-radius: 10px;
      padding: 8px;
    }
    .multiple-item-container {
      display: none;
    }
  }
</style>
