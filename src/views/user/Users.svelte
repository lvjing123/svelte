<script lang="ts">
  // router
  import { push } from "svelte-spa-router";
  import Todo from "./Todo.svelte";
  import Keypad from "./Keypad.svelte";
  import Layout from "../public/layout.svelte";

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
    push("/home");
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

<Layout>
  <p>you can go to home by this btn</p>
  <button class="button" on:click={back}>to home</button>
  <p>dynamics list</p>
  <div class="user-container">
    <div class="card">
      <div class="title">user list</div>
      <ul class="list-card">
        {#each userList as user (user.id)}
          <li>
            <p>
              {user.id} - {user.name}
            </p>
          </li>
        {/each}
      </ul>
      <button class="button" on:click={incrementUser}> increment user </button>
    </div>
    <div class="card">
      <div class="title">if block</div>

      {#if loggedIn}
        <button class="button" on:click={toggle}> Log out </button>
      {/if}

      {#if !loggedIn}
        <button class="button" on:click={toggle}> Log in </button>
      {/if}
    </div>
    <div class="card">
      <div class="title">add color</div>
      <ul class="list-card">
        {#each colorList as cr (cr.id)}
          <li>
            <p>
              {cr.id} - {cr.name}
            </p>
          </li>
        {/each}
      </ul>
      <input placeholder="input color" bind:value={color} />
      <button class="button margin-top-10" on:click={() => addColor(color)}>
        increment color
      </button>
    </div>
  </div>

  <p>example for todo list</p>
  <div class="todo-list-container"><Todo /></div>

  <p>example for use component</p>
  <div class="keyboard-container">
    <h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
    <Keypad bind:value={pin} on:submit={handleSubmitKey} />
  </div>
</Layout>

<style lang="scss" scoped>
  .user-container {
    width: 600px;
    display: flex;
    .card {
      display: block;
      border: 1px solid var(--base-border-color);
      margin: 16px;
      padding: 16px;
      border-radius: 10px;
      box-shadow: 1px 1px 8px #337ca2;
      flex: 1;
      min-width: 200px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
      .list-card {
        border: 1px solid var(--base-border-color);
        border-radius: 10px;
      }
    }
  }
  .todo-list-container {
    display: block;
    border: 1px solid var(--base-border-color);
    margin: 16px;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 1px 1px 8px #337ca2;
    flex: 1;
    min-width: 200px;
  }
  .keyboard-container {
    display: block;
    border: 1px solid var(--base-border-color);
    margin: 16px;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 1px 1px 8px #337ca2;
    flex: 1;
    min-width: 200px;
  }
</style>
