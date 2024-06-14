<script lang="ts">
  // router
  import Layout from "../public/layout.svelte";
  import { loginUser } from "../../store";
  import Chart from "./components/Chart.svelte";

  let chartTitle = "value from home";
</script>

<Layout>
  <div class="home-container">
    <p>you can see value from parent component to children component</p>
    <div class="chart-card"><Chart {chartTitle} /></div>
  </div>
</Layout>

<style lang="scss" scoped>
  .home-container {
    .chart-card {
      width: 900px;
      height: 400px;
    }
  }
</style>
