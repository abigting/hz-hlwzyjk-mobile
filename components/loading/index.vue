<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        // Toast.loading({
        //   duration: 0,
        //   message: '加载中...',
        //   forbidClick: true,
        // });
        this.loading = true
      },
      finish() {
        this.loading = false
        // Toast.clear();
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
