<template>
  <div class="contents">
    <TopHeading heading="Contents" />
    <div class="container contentWrap">
      <ContentTab :tabState="tabState" v-on:currentState="SetType($event)" />
      <content-wrapper
        :itemList="contentList"
        :paginationState="pagination"
        :tabState="tabState"
        v-on:setPage="PageElement($event)"
        v-if="contentList.length > 0"
      />
      <content-empty v-if="nodata" />
    </div>
  </div>
</template>

<script>
import ContentEmpty from "../components/ContentEmpty.vue";
import ContentWrapper from "../components/ContentWrapper.vue";

export default {
  components: { ContentWrapper, ContentEmpty },
  name: "contents",
  data() {
    return {
      tabState: "all",
      contentList: [],
      pagination: {
        totalRecords: 4,
        perPage: 10,
        pageNo: 0,
      },
      nodata: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getContent();
    });
  },
  methods: {
    SetType(event) {
      this.tabState = event;
      this.pagination.resetPageNo = 0;
      this.pagination.pageNo = 0;
      this.getContent();
    },
    PageElement(event) {
      this.pagination.pageNo = event;
      console.log("furthur passing", this.pagination.pageNo);
      this.getContent();
    },
    async getContent() {
      this.$nuxt.$loading.start();
      this.pagination.pageNo = this.pagination.pageNo.toString();
      const contentList = await this.$axios.$post("getcontentlist", {
        per_page: "10",
        page_no: this.pagination.pageNo,
        type: this.tabState,
      });
      if (contentList.status === 200) {
        this.$nuxt.$loading.finish();
        console.log("content", contentList);
        this.contentList = contentList.data;
        this.nodata = this.contentList.length ? false : true;
        this.pagination.totalRecords = Math.ceil(
          contentList.total_records / this.pagination.perPage
        );
        console.log("pagination", this.pagination.totalRecords);
      } else {
        this.$nuxt.$loading.finish();
        alert(contentList.message);
        this.nodata = true;
      }
    },
  },
  // watch: {
  //   tabState: function() {
  //     this.pagination.pageNo = 0;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.contentWrap {
  max-width: 1612px;
  margin: 0 auto;
}
</style>
