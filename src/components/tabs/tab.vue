<template>
  <div :class="b('pane')">
    <slot />
  </div>
</template>

<script>
import bem from "../mixins/bem";

export default {
  name: "tab",
  mixins: [bem],
  props: {
    title: {
      type: String
    }
  },
  mounted() {
    const { tabs } = this.$parent;
    const index = this.$parent.$slots.default.indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);
  },
  beforeDestroy() {
    this.$parent.tabs.splice(this.$parent.tabs.indexOf(this) >>> 0, 1);
  }
};
</script>

<style lang="postcss" scoped>
.tab {
  &__pane {
    height: 100%;
    float: left;
    width: 100vw;
  }
}
</style>

