<template>
  <div>
    <template v-for="(item, index) in itemList">
      <ContentBox
        :key="index || item.id"
        :desc="item.title"
        :author="item.written_by"
        :image="item.cms_image"
        :link="item.article_url"
        :status="item.status"
        :id="index || item.id"
      />
    </template>
    <!-- <jw-pagination
      :items="itemList"
      :labels="customLabels"
      :styles="customStyles"
      :maxPages="paginationState.totalRecords"
      :pageSize="5"
      @changePage="onChangePage"
    ></jw-pagination> -->
    <pagination
      :totalRecords="paginationState.totalRecords"
      :tabState="tabState"
      v-on:setNumber="pageElement($event)"
    />
  </div>
</template>

<script>
import ContentBox from "./ContentBox.vue";
import Pagination from "./Pagination.vue";
export default {
  components: { ContentBox, Pagination },
  name: "ContentWrapper",
  props: {
    itemList: Array,
    paginationState: Object,
    tabState: String,
  },
  data() {
    return {
      page: 1,
      pageOfItems: [],
      // customLabels,
      // customStyles,
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      console.log(pageOfItems);
    },
    pageElement(event) {
      this.$emit("setPage", event);
      console.log("number passed", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.VuePagination__count {
  display: none !important;
}
.page-item {
  &.active {
    .page-link {
      color: $black-1 !important;
    }
  }
}
</style>