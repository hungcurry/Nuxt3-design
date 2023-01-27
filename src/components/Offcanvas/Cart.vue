<script setup>
const ModalStore = useModalStore();
const { CloseCart } = ModalStore;
const { isCart } = storeToRefs(ModalStore);
</script>
<template>
  <div
    class="offcanvas bg-black pl-4 pr-2 text-white lg:pl-8 lg:pr-4"
    :class="{ active: isCart }"
  >
    <div
      class="offcanvas-header flex items-center justify-between pl-0 pt-5 pb-3 pr-2 lg:pt-8 lg:pr-4"
    >
      <h5 class="lg:text-lg">Card List</h5>
      <span class="material-icons block cursor-pointer" @click="CloseCart"
        >close</span
      >
    </div>
    <!-- offcanvas-body -->
    <ul class="offcanvas-body pr-2 pt-3 lg:pr-4">
      <li
        class="cardList-item align-between relative mb-2 flex rounded-lg bg-white px-4 pt-9 pb-4 text-black lg:mb-3 lg:px-8 lg:pt-7 lg:pb-6"
      >
        <div class="close lineHeight-none absolute left-1 top-1">
          <span class="material-icons block cursor-pointer">close</span>
        </div>
        <div class="mr-4 flex-shrink-0">
          <img
            src="@/assets/images/Product/product-1.jpg"
            class="image h-[120px] w-[120px] object-cover"
            alt="product"
          />
        </div>
        <div class="flex flex-grow flex-col">
          <p class="mb-1 font-700">2021 台味設計展</p>
          <p class="mb-1 font-500">01 JUN — 31 OCT</p>
          <p class="font-300 text-muted">全票</p>
          <p class="mt-auto text-m font-700">NT$350</p>
        </div>
        <div class="flex flex-col items-center justify-center lg:flex-row">
          <div class="lineHeight-none mb-1 lg:order-3 lg:mb-0">
            <span class="material-icons block cursor-pointer">add</span>
          </div>
          <div class="px-1 text-m font-700 md:px-3">01</div>
          <div class="lineHeight-none mt-1 lg:order-first lg:mt-0">
            <span class="material-icons block cursor-pointer">remove</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- offcanvas-footer -->
    <div
      class="offcanvas-footer flex items-center justify-between pr-2 lg:pr-4"
    >
      <div class="font-m flex items-center py-11 text-m">
        <span class="mr-6">小計</span>
        <span>NT$2100</span>
      </div>
      <a
        href="./checkoutA"
        class="btn-lg btn bg-white px-7 text-m text-primary hover:bg-secondary hover:text-white"
        >前往結帳</a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.offcanvas {
  bottom: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: fixed;
  right: -800px;
  top: 6rem;
  transition: right 0.6s;
  width: 100%;
  z-index: 999;

  @include pad(768) {
    top: 6.9rem;
    width: 40rem;
  }

  @include pad(992) {
    top: 8.3rem;
    width: 54rem;
  }
}
.active {
  right: 0;
}
</style>
