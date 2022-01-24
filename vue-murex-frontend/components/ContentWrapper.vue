<template>
  <div>
    <ContentBox
      v-for="(item, index) in itemList"
      :key="index || item.id"
      :desc="item.title"
      :author="item.written_by"
      :image="item.cms_image"
      :link="item.article_url"
    />
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
      :resetPageNo="paginationState.resetPageNo"
      v-on:setNumber="pageElement($event)"
    />
  </div>
</template>

<script>
import ContentBox from "./ContentBox.vue";
import Pagination from "./Pagination.vue";
// const customLabels = {
//   first: "",
//   last: "",
//   previous: "<",
//   next: ">",
// };
// const customStyles = {
//   ul: {
//     // border: "2px solid red",
//     position: "relative",
//     left: "50%",
//     transform: "translateX(-50%)",
//   },
//   li: {
//     display: "inline-block",
//   },
//   a: {
//     color: "#828282",
//     fontSize: "16px",
//   },
// };
export default {
  components: { ContentBox, Pagination },
  name: "ContentWrapper",
  props: {
    itemList: Array,
    paginationState: Object,
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