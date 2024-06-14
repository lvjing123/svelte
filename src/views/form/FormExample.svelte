<script lang="ts">
  // router
  import Layout from "../public/layout.svelte";

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

  let formValue = {
    selected: 1,
    answer: null,
    checked: false,
    flavours: ["Mint choc chip"],
    textarea: "",
    flavourSelectMulipty: ["Mint choc chip"],
  };

  function handleSubmit() {
    console.log(formValue, "formValue");
  }

  let pin: any;
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : "enter your pin";

  function handleSubmitKey() {
    alert(`submitted ${pin}`);
  }
</script>

<Layout>
  <p>example for form</p>
  <form on:submit|preventDefault={handleSubmit} class="form-container">
    <select
      bind:value={formValue.selected}
      on:change={() => (formValue.answer = null)}
      class="item"
    >
      {#each selectOptions as item}
        <option value={item.id}>
          {item.text}
        </option>
      {/each}
    </select>

    <input bind:value={formValue.answer} class="item" />

    <label class="item">
      <input type="checkbox" bind:checked={formValue.checked} />
      Yes! Send me regular email spam
    </label>

    <div class="item">
      {#each selectMulipty as flavour}
        <label>
          <input
            type="checkbox"
            bind:group={formValue.flavours}
            value={flavour}
          />
          {flavour}
        </label>
      {/each}
    </div>
    <textarea class="item" bind:value={formValue.textarea}></textarea>

    <div>
      <select multiple bind:value={formValue.flavourSelectMulipty}>
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
  }
</style>
