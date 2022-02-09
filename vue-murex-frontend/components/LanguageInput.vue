<template>
  <div class="lang-dropdown">
    <!-- <select v-model="$i18n.locale">
      <option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
        >{{ lang.name }}</option
      >
    </select> -->

    <select v-model="selectedValue" @change="onChange(selectedValue)">
        <option
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          :value="locale.code"
        >{{locale.name}}</option>
      </select>

  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedValue: ""
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    }
  },
}
</script>

<style lang="scss" scoped>
.lang-dropdown{
  select{
    @include grey-text-1;
    background-color: transparent;
  }
}
</style>
