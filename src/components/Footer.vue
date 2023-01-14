<script setup>
const listArr = reactive([{ name: 'Sign in' }, { name: 'Sign up' }]);
</script>
<template>
  <footer class="bg-white">
    <div class="container py-3 lg:flex lg:justify-between lg:py-6">
      <div class="md:flex md:items-center">
        <h5 class="text-lg font-400 text-black">
          <a href="/">EXHIBINECTION</a>
        </h5>
        <p class="copyright md:ml-4">© 2023. All Rights Reserved.</p>
      </div>
      <div
        class="hidden flex-grow basis-full items-center lg:flex lg:flex-grow-0 lg:basis-auto"
      >
        <ul class="navbar-nav mt-4 flex list-none flex-col lg:mt-0 lg:flex-row">
          <li class="lg:mr-8" v-for="item in listArr" :key="item.name">
            <a
              href="javascript:;"
              class="block p-[0.5rem] text-center text-muted"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.navbar-nav > li:last-child {
  @include pad(992) {
    margin-right: 0;
  }
}
</style>
