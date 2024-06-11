<script lang="ts">
  // router
  import { push } from "svelte-spa-router";
  import Todo from "./Todo.svelte";
  import Keypad from "./Keypad.svelte";

  let userList: any = [
    { id: 1, name: "darkblue" },
    { id: 2, name: "indigo" },
  ];
  function incrementUser() {
    // list.push is not work
    // this must be a new list
    userList = [
      ...userList,
      {
        id: userList.length + 1,
        name: "user" + userList.length,
      },
    ];
  }

  const back = () => {
    push("/");
  };

  // for if block
  let loggedIn = false;

  function toggle() {
    loggedIn = !loggedIn;
  }

  // list and input
  let color = "";
  let colorList: any = [];
  function addColor(color: string) {
    // list.push is not work
    // this must be a new list
    colorList = [
      ...colorList,
      {
        id: colorList.length + 1,
        name: color,
      },
    ];
  }
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

<button class="button" on:click={back}>to home</button>
<div class="user-container">
  <div class="user-list">
    <div class="title">user list</div>
    <ul class="user-card">
      {#each userList as user (user.id)}
        <li>
          <p>
            {user.id} - {user.name}
          </p>
        </li>
      {/each}
    </ul>
    <button on:click={incrementUser}> increment user </button>
  </div>
  <div class="user-if-block">
    <div class="title">if block</div>

    {#if loggedIn}
      <button on:click={toggle}> Log out </button>
    {/if}

    {#if !loggedIn}
      <button on:click={toggle}> Log in </button>
    {/if}
  </div>
  <div class="color-list">
    <div class="title">add color</div>
    <ul class="user-card">
      {#each colorList as cr (cr.id)}
        <li>
          <p>
            {cr.id} - {cr.name}
          </p>
        </li>
      {/each}
    </ul>
    <input placeholder="input color" bind:value={color} />
    <button on:click={() => addColor(color)}> increment color </button>
  </div>
</div>
<div>example for form</div>
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
      {#each selectMulipty as flavour}
        <option value={flavour}>
          {flavour}
        </option>
      {/each}
    </select>
  </div>

  <button type="submit" class="item"> Submit </button>
</form>
<div>example for todo list</div>
<div class="todo-list-container"><Todo /></div>

<div>example for use component</div>
<div class="keyboard-container">
  <h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
  <Keypad bind:value={pin} on:submit={handleSubmitKey} />
</div>

<style lang="scss" scoped>
  .button {
    display: block;
    margin-bottom: 10px;
  }
  .user-container {
    margin: 0 auto;
    width: 600px;
    display: flex;
    .user-list {
      display: block;
      border: 1px solid #ccc;
      flex: 1;
      margin: 10px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
      .user-card {
        border: 1px solid lightblue;
        border-radius: 10px;
      }
    }
    .user-if-block {
      margin-top: 10px;
      border: 1px solid #ccc;
      flex: 1;
      margin: 10px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
    }
    .color-list {
      display: block;
      border: 1px solid #ccc;
      flex: 1;
      margin: 10px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
      .user-card {
        border: 1px solid lightblue;
        border-radius: 10px;
      }
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid chocolate;
    .item {
      margin: 10px;
      text-align: left;
      border: 1px solid rgb(18, 40, 166);
      height: 32px;
      border-radius: 10px;
    }
  }
  .todo-list-container {
    border: 1px solid chocolate;
  }
  .keyboard-container {
    border: 1px solid chocolate;
  }
</style>
