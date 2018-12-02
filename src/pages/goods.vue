<template>
  <div class="page-goods">
    <div class="page-goods__header">
      <div class="goods-seller clearfix">
        <img class="goods-seller__logo" />
        <div class="goods-seller__info">
          <div class="goods-seller__info--name">
            <span class="icon"></span>
            粥品香坊（大运村）
          </div>
          <div class="goods-seller__info--express">
            蜂鸟专送 / 38分钟内送达
          </div>
          <div class="goods-seller__info--activity">
            <span class="icon"></span>
            在线支付满28减5，满50减10
          </div>
        </div>
        <div class="goods-seller__activity">
          <span class="icon"></span>
          <div class="goods-seller__activity--info">
            粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊 
          </div>
          <i class="iconfont icon-keyboard_arrow_right" />
        </div>
      </div>
    </div>

    <div class="page-goods__navs">
      <tabs>
        <tab title="商品">
          This is 商品
        </tab>
        <tab title="评价">
          This is 评价
        </tab>
        <tab title="商家">
          This is 商家
        </tab>
      </tabs>
    </div>
  </div>  
</template>

<script>
import tabs from "@/components/tabs/tabs";
import tab from "@/components/tabs/tab";

export default {
  components: {
    tabs,
    tab
  }
};
</script>

<style lang="postcss" scoped>
@import url("../assets/style/mixins.css");
.page-goods {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  &__header {
    background-color: rgba(7, 17, 27, 0.5);
    padding-top: 48px;
    .goods-seller {
      position: relative;
      padding-bottom: 92px;

      &__logo {
        float: left;
        width: 128px;
        height: 128px;
        border: 0;
        margin-left: 48px;
        border-radius: 4px;
        background: red;
      }
      &__info {
        margin-left: 208px;
        color: #fff;
        overflow: hidden;
        &--name {
          font-size: 32px;
          font-weight: bold;
          line-height: 36px;
          display: flex;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 16px;
          .icon {
            display: block;
            width: 60px;
            height: 36px;
            background-size: 60px 36px;
            @mixin image brand;
            margin-right: 12px;
          }
        }
        &--express {
          font-size: 24px;
          font-weight: 200;
          line-height: 24px;
          margin-bottom: 20px;
        }
        &--activity {
          font-size: 20px;
          line-height: 24px;
          font-weight: 200;
          display: flex;
          align-items: center;
          .icon {
            width: 24px;
            height: 24px;
            background-size: 24px 24px;
            @mixin image decrease_1;
            margin-right: 8px;
          }
        }
      }
      &__activity {
        height: 56px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: rgba(7, 17, 27, 0.2);
        font-size: 20px;
        color: #fff;
        font-weight: 200;
        line-height: 56px;
        display: flex;
        align-items: center;
        .icon {
          margin-left: 24px;
          margin-right: 8px;
          display: inline-block;
          width: 44px;
          height: 24px;
          background-size: 44px 24px;
          @mixin image bulletin;
        }
        &--info {
          margin-right: 40px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .iconfont {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  &__navs {
    flex: 1;
  }
}
</style>
