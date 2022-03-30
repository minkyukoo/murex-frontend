<template>
<client-only>
  <Banner />
</client-only>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
  components: { Banner },
  layout: 'home',
  name: 'IndexPage',
}
</script>
