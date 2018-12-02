<template>
  <div :class="b([type])">
    <div ref="nav" :class="b('nav')">
      <div
        v-if="type === 'line'"
        :style="lineStyle"
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
      <div :style="trackStyle" :class="b('track')">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import bem from "../mixins/bem";
import Touch from "../mixins/touch";
import { on, off } from "../utils/event";

export default {
  name: "tabs",
  mixins: [bem, Touch],
  data() {
    return {
      tabs: [],
      curActive: 0
    };
  },
  computed: {
    lineStyle() {
      return {
        left: `calc(100% / 3 * ${this.curActive})`
      };
    },
    trackStyle() {
      return {
        transform: `translateX(calc(-100vw * ${this.curActive})`
      };
    }
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
    },
    handlers(bind) {
      const swipeable = bind; // 是否swiper内容
      const { content } = this.$refs;
      const action = swipeable ? on : off;
      action(content, "touchstart", this.touchStart);
      action(content, "touchmove", this.touchMove);
      action(content, "touchend", this.onTouchEnd);
      action(content, "touchcancel", this.onTouchEnd);
    },
    onTouchEnd() {
      const minSwipeDistance = 50;
      const { direction, deltaX, curActive } = this;

      if (direction === "horizontal" && this.offsetX >= minSwipeDistance) {
        if (deltaX > 0 && curActive !== 0) {
          this.curActive = curActive - 1;
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.curActive = curActive + 1;
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handlers(true);
    });
  },
  beforeDestroy() {
    this.handlers(false);
  }
};
</script>

<style lang="postcss" scoped>
.tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
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
    transition: left 0.2s;
    background-color: rgba(240, 20, 20);
  }
  &__content {
    flex: 1;
    overflow-x: hidden;
  }
  &__track {
    width: 300%;
    height: 100%;
    transition: transform 0.2s;
  }
}
</style>

