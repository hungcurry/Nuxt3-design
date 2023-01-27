<script setup>
const ModalStore = useModalStore();
const { CloseSign } = ModalStore;
const { isSign } = storeToRefs(ModalStore);
</script>
<template>
  <div
    class="dialog w-full md:w-[90%] lg:w-[500px]"
    :class="{ active: isSign }"
  >
    <span @click="CloseSign" class="material-icons block cursor-pointer"
      >close</span
    >
  </div>
</template>
<style lang="scss" scoped>
.dialog {
  background-color: red;
  height: 500px;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.6s;
  z-index: 999;
}
.active {
  opacity: 0.8;
  pointer-events: auto;
}
</style>
