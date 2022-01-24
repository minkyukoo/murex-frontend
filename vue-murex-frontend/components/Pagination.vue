<template>
  <div class="custom-pagination">
    <ul class="paginator">
      <li>
        <button
          class="btn-prev pagi-item"
          @click="FindPageNo(pageNo - 1)"
          :disabled="pageNo <= 0"
        >
          <img src="../assets/icons/arrow-prev.svg" alt="img" />
        </button>
      </li>
      <li v-for="(item, index) in totalPaginator" :key="index">
        <button
          :class="`${pageNo === index ? 'active' : ''} pagi-item`"
          @click="FindPageNo(index)"
        >
          {{ item.pageNo }}
        </button>
      </li>
      <li>
        <button
          class="btn-next pagi-item"
          @click="FindPageNo(pageNo + 1)"
          :disabled="pageNo >= totalPaginator.length - 1"
        >
          <img src="../assets/icons/arrow-next.svg" alt="img" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalRecords: Number,
    // pageNo: String,
  },
  data() {
    return {
      totalPaginator: [],
      pageNo: 0,
    };
  },

  methods: {
    calcPage() {
      for (let i = 0; i < this.totalRecords; i++) {
        this.totalPaginator.push({ pageNo: i + 1 });
      }
      console.log("ele", this.totalRecords);
    },
    FindPageNo(id) {
      this.pageNo = id;
      this.$emit("setNumber", this.pageNo);
      console.log("page no", this.pageNo);
    },
  },
  watch: {
    totalRecords: function () {
      this.totalPaginator = [];
      this.calcPage();
    },
  },
};
</script>

<style lang="scss" scoped>
.paginator {
  @include dflex-align-justify-center;
  padding-bottom: calc(60px + 3vw);
  @media screen and (max-width: 567px) {
    padding-bottom: 50px;
  }
  .pagi-item {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 150%;
    color: $grey-2;
    &.active {
      color: $black-1;
      border-bottom: 2px solid $black-1;
    }
  }
}
</style>