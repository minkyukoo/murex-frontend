<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <header class="modal-header">
          <slot name="header"> This is the default title! </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            v-if="showCloseBtn"
          >
            <i class="icon-cross"></i>
          </button>
        </header>

        <section class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showCloseBtn: Boolean,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //   background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  //   backdrop-filter: blur(2px);
}

.modal {
  background: rgba(255, 255, 255, 0.95);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 99;
  //   max-width: 330px;
  //   color: $black-3;
  //   border-radius: 20px;
}

.modal-content {
  padding: calc(10px + 4.5vw) calc(5px + 7.75vw) calc(15px + 1vw);
}

.modal-footer {
  padding: 15px;
}

.modal-header {
  position: relative;
  //   border-bottom: 1px solid #eeeeee;
  //   color: $black-3;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.modal-body {
  position: relative;
  padding: 10px 10px;
}

.btn-close {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   border: none;
  //   font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: $black-1;
  background: transparent;
  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: right;
    order: -1;
  }
}
</style>