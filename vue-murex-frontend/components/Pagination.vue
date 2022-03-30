<template>
  <div class="custom-pagination">
    <ul class="paginator">
      <li>
        <button
          class="btn-prev pagi-item"
          @click="FindPageNo(pagiNo - 1)"
          :disabled="pagiNo <= 0"
        >
          <img
            src="../assets/icons/arrow-prev.svg"
            alt="img"
            v-if="pagiNo > 0"
          />
          <img src="../assets/icons/arrow-prev-disabled.svg" alt="img" v-else />
        </button>
      </li>
      <li v-for="(item, index) in totalPaginator" :key="index">
        <button
          :class="`${pagiNo === index ? 'active' : ''} pagi-item`"
          @click="FindPageNo(index)"
        >
          {{ item.pagiNo }}
        </button>
      </li>
      <li>
        <button
          class="btn-next pagi-item"
          @click="FindPageNo(pagiNo + 1)"
          :disabled="pagiNo >= totalPaginator.length - 1"
        >
          <img
            src="../assets/icons/arrow-next.svg"
            alt="img"
            v-if="pagiNo < totalPaginator.length - 1"
          />
          <img
            src="../assets/icons/arrow-next-disabled.svg"
            alt="img"
            v-else
          />
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
    tabState: String,
  },
  data() {
    return {
      totalPaginator: [],
      pagiNo: 0,
    };
  },

  mounted() {
    this.calcPage();
    console.log("pagi state", this.resetPageNo);
  },

  methods: {
    calcPage() {
      for (let i = 0; i < this.totalRecords; i++) {
        this.totalPaginator.push({ pagiNo: i + 1 });
      }
      console.log("ele", this.totalRecords);
    },
    FindPageNo(id) {
      this.pagiNo = id;
      this.$emit("setNumber", this.pagiNo);
      console.log("page no", this.pagiNo);
    },
  },
  watch: {
    totalRecords: function () {
      this.totalPaginator = [];
      this.calcPage();
    },
    tabState: function () {
      this.pagiNo = 0;
      console.log("page no reset to", this.pagiNo);
      // this.calcPage();
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