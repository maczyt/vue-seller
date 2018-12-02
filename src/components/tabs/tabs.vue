<template>
  <div :class="b([type])">
    <div ref="wrap" :class="b('wrap')">
      <div ref="nav" :class="b('nav')">
        <div
          v-if="type === 'line'" 
          :class="b('line')"></div>
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[b('tab'), { 'active': index === curActive }]"
          @click="onClick(index)"
          ref="tabs">
          {{ tab.title }}  
        </div>
      </div>

      <div ref="content" :class="b('content')">
        <div :class="b('track')">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bem from "../mixins/bem";

export default {
  name: "tabs",
  mixins: [bem],
  data() {
    return {
      tabs: [],
      curActive: 0
    };
  },
  props: {
    type: {
      type: String,
      default: "line"
    }
  },
  methods: {
    onClick(index) {
      this.curActive = index;
    }
  }
};
</script>

<style lang="postcss" scoped>
.tabs {
  &__nav {
    height: 80px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    display: flex;
    line-height: 80px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  &__tab {
    height: 100%;
    width: calc(100% / 3);
    &.active {
      color: rgb(240, 20, 20);
    }
  }
  &__line {
    width: calc(100% / 3);
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 1px;
    background-color: rgba(240, 20, 20);
  }
}
</style>

