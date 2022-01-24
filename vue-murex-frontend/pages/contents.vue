<template>
  <div class="contents">
    <TopHeading heading="Contents" />
    <div class="container">
      <ContentTab :tabState="tabState" v-on:currentState="SetType($event)" />
      <content-wrapper
        :itemList="contentList"
        :paginationState="pagination"
        v-on:setPage="PageElement($event)"
        v-if="contentList.length > 0"
      />
      <content-empty v-else-if="contentList.length == 0" />
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
        pageNo: "0",
        resetPageNo: 1,
      },
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
      this.pagination.pageNo = "0";
      this.getContent();
    },
    PageElement(event) {
      this.pagination.pageNo = event.toString();
      console.log("furthur passing", this.pagination.pageNo);
      this.getContent();
    },
    async getContent() {
      const contentList = await this.$axios.$get("getcontentlist", {
        params: {
          per_page: "10",
          page_no: this.pagination.pageNo,
          type: this.tabState,
        },
      });
      console.log("content", contentList);
      this.contentList = contentList.data;
      this.pagination.totalRecords = Math.ceil(
        contentList.total_records / this.pagination.perPage
      );
      console.log("pagination", this.pagination.totalRecords);
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
</style>
