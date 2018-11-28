<template>
  <div class="page-goods">
    <div class="page-goods__header">
      <div class="goods-seller clearfix">
        <img class="goods-seller__logo" />
        <div class="goods-seller__info">
          <div class="goods-seller__info--name">
            粥品香坊（大运村）
          </div>
          <div class="goods-seller__info--express">
            蜂鸟专送 / 38分钟内送达
          </div>
          <div class="goods-seller__info--activity">
            在线支付满28减5，满50减10
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.page-goods {
  &__header {
    background-color: rgba(7, 17, 27, 0.5);
    padding-top: 48px;
    .goods-seller {
      position: relative;
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
        &--name {
          font-size: 32px;
          font-weight: bold;
          line-height: 36px;
        }
        &--express {
          font-size: 24px;
          font-weight: 200;
          line-height: 24px;
        }
        &--activity {
          font-size: 20px;
          line-height: 24px;
          font-weight: 200;
        }
      }
    }
  }
}
</style>
