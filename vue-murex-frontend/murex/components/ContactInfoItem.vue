<template>
  <li class="inf-item">
    <div class="inf-ico">
      <i :class="`${iconClass}`"></i>
    </div>
    <div class="inf-item-cont">
      <p class="label">{{ label }}</p>
      <a :href="`tel:${cont}`" v-if="`${linkType}` == 'tel'" class="cont">{{
        cont
      }}</a>
      <a
        :href="`mailto:${cont}`"
        v-else-if="`${linkType}` == 'mail'"
        class="cont"
        >{{ cont }}</a
      >
      <p v-else class="cont">{{ cont }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ContactInfoItem",
  props: {
    iconClass: String,
    label: String,
    cont: String,
    linkType: String,
  },
};
</script>

<style lang="scss" scoped>
.inf-item {
  display: flex;
  margin-bottom: 29px;
  .inf-ico{
    width:20px;
    height: 20px;
  }
  .inf-item-cont{
    width: calc(100% - 20px);
    padding-left: 10px;
  }
  i {
    // margin-right: 7px;
    margin-top: 4px;
  }
  .label {
    @include black-text-1;
    margin-bottom: 7px;
    font-weight: 500;
  }
  .cont {
    @include black-text-2;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
