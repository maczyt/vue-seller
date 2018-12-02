<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
.clearfix {
  &:after {
    content: "";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
  }
}
.icon {
  display: inline-block;
}
</style>
