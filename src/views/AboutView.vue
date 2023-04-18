<script lang="ts">
// <script setup lang="ts">
import { defineComponent } from "vue";
import latestServices from "@/services/latest"
import { Latest } from "@/types/latest"

export default defineComponent({
  name: "about-view",
  mounted() {
    // console.log("latestServices response", Latest)
    // latestServices.getLatest().then((response: Response) => {
    latestServices.getLatest().then((response: Latest) => {
      console.log("latestServices response", response)
    })
  }
})

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <!-- <v-btn @click="callApi()" color="primary">Call API</v-btn> -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
