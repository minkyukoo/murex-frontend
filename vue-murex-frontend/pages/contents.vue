<template>
  <div class="contents">
    <TopHeading heading="Contents" />
    <div class="container">
      <ContentTab :tabState="tabState" v-on:currentState="SetType($event)" />
      <content-wrapper
        :itemList="contentList"
        :paginationState="pagination"
        v-on:setPage="PageElement($event)"
      />
    </div>
  </div>
</template>

<script>
import ContentWrapper from "../components/ContentWrapper.vue";
export default {
  components: { ContentWrapper },
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
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getContent();
    })
  },
  methods: {
    SetType(event) {
      this.tabState = event;
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
};
</script>

<style lang="scss" scoped>

</style>
