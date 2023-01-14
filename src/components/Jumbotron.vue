<script setup>
const route = useRoute();
const path = ref('');
watch(
  () => route.path,
  (newV, oldV) => {
    path.value = newV;
  },
);

onMounted(() => {
  path.value = route.path;
});
</script>
<template>
  <section
    :class="path !== '/' ? 'hidden' : 'block'"
    class="jumbotron bg-cover bg-center"
  >
    <div class="container h-full text-white">
      <div class="row h-full items-end md:items-center">
        <div class="col-md-11 md:ml-[8.3333%]">
          <h2 class="mb-2 font-700">THUMB-STOPPING CREATIVE</h2>
          <p class="text-lg">令人驚嘆的創意!</p>
          <p class="text-s mb-4 font-700">01 JUN - 31 OCT</p>
          <div class="flex">
            <a
              href="javascript:;"
              class="btn-secondary btn-lg btn mr-3 w-1/2 text-base text-white md:mr-2 md:w-auto md:px-12"
              >購買票券</a
            >
            <a
              href="javascript:;"
              class="btn-outline btn-lg btn w-1/2 border border-white text-base text-white hover:bg-white hover:text-black md:w-auto md:px-12"
              >詳細資訊</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.jumbotron {
  background-image: url('@/assets/images/banner.jpg');
  height: 48rem;
  .row {
    padding-bottom: 8rem;
    @include pad(768) {
      padding-bottom: 0;
    }
  }
}
</style>
