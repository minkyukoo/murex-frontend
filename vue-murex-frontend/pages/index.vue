<template>
<no-ssr placeholder="Loading...">
  <Banner />
</no-ssr>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
  components: { Banner },
  layout: 'home',
  name: 'IndexPage'
}
</script>
