<template>
  <li class="inf-item">
    <i :class="`${iconClass}`"></i>
    <div class="inf-item-cont">
      <p class="label">{{label}}</p>
      <p class="cont">{{cont}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ContactInfoItem',
  props: {
    iconClass: String,
    label: String,
    cont: String
  }
}
</script>

<style lang="scss" scoped>
</style>
