<template>
  <div class="flex mb-10">
    <div class="filters" role="button">All</div>
    <div class="filters dropdown">
      <h4 class="dropdown-opener" @click="openSector">Sector</h4>
      <div :class="[sectorState ? 'dropdown-menu active' : 'dropdown-menu']">
        <!-- <input
          type="checkbox"
          class="appearance-none h-4 w-4 border border-grey-1 rounded-sm"
          id="sector-1"
        /> -->
        <div
          class="dropdown-item"
          v-for="(item, index) of sectors"
          :key="index"
        >
          <label class="custom-checkbox"
            >{{ item.name }}
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
          <button class="clear-filter" @click="clearSectors">
            Clear Filter
          </button>
        </div>
      </div>
    </div>
    <div class="filters dropdown">
      <h4 class="dropdown-opener" @click="openState">Status</h4>
      <div :class="[statusState ? 'dropdown-menu active' : 'dropdown-menu']">
        <!-- <input
          type="checkbox"
          class="appearance-none h-4 w-4 border border-grey-1 rounded-sm"
          id="sector-1"
        /> -->
        <div class="dropdown-item" v-for="(item, index) of status" :key="index">
          <label class="custom-checkbox"
            >{{ item.name }}
            <input type="checkbox" :value="item.name" v-model="item.selected" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div>
          <button class="clear-filter" @click="clearStatus">
            Clear Filter
          </button>
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
          name: "Consumer",
          selected: false,
        },
        {
          id: "02",
          name: "Enterprise",
          selected: false,
        },
        {
          id: "03",
          name: "Healthcare",
          selected: false,
        },
        {
          id: "04",
          name: "Crypto",
          selected: false,
        },
      ],
      status: [
        {
          id: "01",
          name: "Current",
          selected: false,
        },
        {
          id: "02",
          name: "Alumni",
          selected: false,
        },
      ],
      sectorState: false,
      statusState: false,
      check: false,
      sectorFilter: [],
      statusFilter: [],
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
    clearSectors() {
      this.sectors.forEach((item) => (item.selected = false));
      console.log("Sector cleared");
    },
    clearStatus() {
      this.status.forEach((i) => (i.selected = false));
    },
    filterIt(event) {
      this.sectorFilter.push(event.target.value)
      console.log(this.sectorFilter)
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  margin-right: 50px;
  font-weight: 300;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    padding: 0 16px;
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