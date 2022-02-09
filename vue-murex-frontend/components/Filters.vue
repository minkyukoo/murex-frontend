<template>
  <div class="flex mb-10">
    <div class="filters" role="button" @click="ClearAll">{{ $t(`founders.filters.allFilters`) }}</div>
    <div class="filters dropdown">
      <h4 class="dropdown-opener" @click="openSector">{{ $t(`founders.filters.sectorFilters`) }}</h4>
      <div :class="[sectorState ? 'dropdown-menu active' : 'dropdown-menu']" v-show="sectorState">
        <!-- <input
          type="checkbox"
          class="appearance-none h-4 w-4 border border-grey-1 rounded-sm"
          id="sector-1"
        />-->
        <div class="dropdown-item" v-for="(item, index) of sectors" :key="index">
          <label class="custom-checkbox">
            {{ item.name }}
            <input
              type="checkbox"
              :value="item.filterName"
              v-model="item.selected"
              @change="filterIt"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div>
          <button class="clear-filter" @click="clearSectors">{{ $t(`founders.button.clearFilter`) }}</button>
        </div>
      </div>
    </div>
    <div class="filters dropdown">
      <h4 class="dropdown-opener" @click="openState">{{ $t(`founders.filters.statusFilters`) }}</h4>
      <div :class="[statusState ? 'dropdown-menu active' : 'dropdown-menu']" v-show="statusState">
        <!-- <input
          type="checkbox"
          class="appearance-none h-4 w-4 border border-grey-1 rounded-sm"
          id="sector-1"
        />-->
        <div class="dropdown-item" v-for="(item, index) of status" :key="index">
          <label class="custom-checkbox">
            {{ item.name }}
            <input
              type="checkbox"
              :value="item.name"
              v-model="item.selected"
              @change="filterIt"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div>
          <button class="clear-filter" @click="clearStatus">{{ $t(`founders.button.clearFilter`) }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      sectors: [
        {
          id: "01",
          name: this.$t(`founders.sectors.consumer`),
          filterName: "Consumer",
          selected: false,
        },
        {
          id: "02",
          name: this.$t(`founders.sectors.enterprise`),
          filterName: "Enterprise",
          selected: false,
        },
        {
          id: "03",
          name: this.$t(`founders.sectors.healthcare`),
          filterName: "Healthcare",
          selected: false,
        },
        {
          id: "04",
          name: this.$t(`founders.sectors.crypto`),
          filterName: "Crypto",
          selected: false,
        },
      ],
      status: [
        {
          id: "01",
          name: this.$t(`founders.status.current`),
          filterName: "Current",
          selected: false,
        },
        {
          id: "02",
          name: this.$t(`founders.status.alumni`),
          filterName: "Alumni",
          selected: false,
        },
      ],
      sectorState: false,
      statusState: false,
      check: false,
      sectorFilter: [],
      // statusFilter: [],
    };
  },
  methods: {
    openSector() {
      this.sectorState = !this.sectorState;
      this.statusState = false;
    },
    openState() {
      this.statusState = !this.statusState;
      this.sectorState = false;
    },
    onClick(e) {
      console.log("document Click");
      if (!this.$el.contains(e.target)) {
        this.sectorState = false;
        this.statusState = false;
      }
    },
    ClearAll() {
      this.sectors.forEach((item) => (item.selected = false));
      this.status.forEach((i) => (i.selected = false));
      this.sectorFilter = [];
      this.$emit("sectorFilter", this.sectorFilter);
      console.log(this.sectorFilter);
    },
    clearSectors() {
      this.sectors.forEach((item) => (item.selected = false));
      console.log("Sector cleared");
      // this.sectorFilter = [];
      this.sectors.forEach((e, i) => {
        let imd = this.sectorFilter.findIndex((x) => x == e.filterName);
        if (imd > -1) {
          this.sectorFilter.splice(imd, 1);
        }
      });
      this.$emit("sectorFilter", this.sectorFilter);
    },
    clearStatus() {
      this.status.forEach((i) => (i.selected = false));
      this.status.forEach((e, i) => {
        let imd = this.sectorFilter.findIndex((x) => x == e.filterName);
        if (imd > -1) {
          this.sectorFilter.splice(imd, 1);
        }
      });
      this.$emit("sectorFilter", this.sectorFilter);
    },
    filterIt(event) {
      if (event.target.checked) {
        console.log(event.target.checked);
        this.sectorFilter.push(event.target.value);
      } else if (!event.target.checked) {
        let index = this.sectorFilter.findIndex((x) => x == event.target.value);
        if (index > -1) {
          this.sectorFilter.splice(index, 1);
        }
      }
      this.$emit("sectorFilter", this.sectorFilter);
      console.log(this.sectorFilter);
    },
  },
  updated() {
    document.addEventListener("click", this.onClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClick);
  },
};
</script>

<style lang="scss" scoped>
.filters {
  margin-right: 50px;
  font-weight: 300;
  font-size: 20px;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
    padding: 0 16px;
    margin-right: 26px;
  }
}
.dropdown {
  position: relative;
  .dropdown-opener {
    cursor: pointer;
    position: relative;
    padding-left: 18px;
    font-weight: 300;
    font-size: 20px;
    @media screen and (max-width: 767px) {
      font-size: 15px;
      line-height: 22px;
    }
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border: 5px solid $purple-3;
      border-color: $purple-3 transparent transparent transparent;
      position: absolute;
      left: 0;
      top: 12px;
      @media screen and (max-width: 767px) {
        top: 9px;
      }
    }
  }
}
.dropdown-menu {
  display: none;
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 9;
  padding: 12px 24px;
  min-width: 150px;
  background: $white;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #000000;
  @media screen and (max-width: 360px) {
    left: -30px;
  }
  &.active {
    display: block;
  }
  .dropdown-item {
    margin-bottom: 16px;
    label {
      font-size: 14px;
      line-height: 21px;
    }
  }
  .clear-filter {
    color: $purple-2;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
