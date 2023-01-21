<script setup>
import SlotTitle from '@/components/Slots/SlotTitle.vue';
const { detailObj } = useDetailStore();
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
// reduce重組資料
const reduceObj = detailObj.reduce(function (prev, next) {
  const { id, title, type, description, src } = next;
  return {
    ...prev,
    [id]: {
      title,
      type,
      description: [description[0], description[1]],
      src: [src[0], src[1]],
    },
  };
}, {});
// props 解構出來的值要用value
const { id } = toRefs(props.data);
const content = computed(() => {
  return reduceObj[id.value];
});
</script>
<template>
  <div class="row pb-6 lg:pb-12">
    <slot-title>詳細介紹</slot-title>
    <div class="col-lg-8 lg:order-3">
      <h3 class="mb-1 text-m font-700 lg:text-2xl">
        {{ content.title }}
      </h3>
      <p class="mb-3 text-m">{{ content.type }}</p>
      <p class="mb-8 font-300">{{ content.description[0] }}</p>
      <p class="mb-5 font-300">{{ content.description[1] }}</p>
    </div>
    <div class="col-12">
      <img
        :src="content.src[0]"
        class="mb-4 h-[40rem] w-full object-cover object-center lg:mb-8"
        alt="introduceImg"
      />
    </div>
    <div class="col-lg-4">
      <img
        :src="content.src[1]"
        class="h-[50rem] w-full object-cover object-center"
        alt="introduceImg"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
