<script setup>
// 產品資料
const { listObj } = useProductStore();
const route = useRoute();
const routeStr = route.query.router;
const rooterId = route.params.id;

// 重組格式
const contentData = computed(() => {
  return listObj[routeStr];
});
const data = contentData.value.filter(item => {
  return item.id === Number(rooterId);
});
const content = computed(() => {
  return data[0];
});
</script>
<template>
  <main>
    <div class="container">
      <div class="aa">{{ route.params.id }}</div>
      <DetailTicket :data="content" />
      <DetailIntroduce :data="content" />
    </div>
  </main>
</template>
<style lang="scss" scoped>
.aa {
  color: blue;
  font-size: 60px;
  text-align: center;
}
</style>
