<script setup>
const CartStore = useCartStore();
const { cartAry, patchCartItem } = CartStore;
</script>
<template>
  <div>
    <li
      v-for="list in cartAry"
      :key="list.id"
      class="cardList-item align-between relative mb-2 flex rounded-lg bg-white px-4 pt-9 pb-4 text-black lg:mb-3 lg:px-8 lg:pt-7 lg:pb-6"
    >
      <div class="close lineHeight-none absolute left-1 top-1">
        <span
          class="material-icons block cursor-pointer"
          :data-orderId="list.orderId"
          >close</span
        >
      </div>
      <div class="mr-4 flex-shrink-0">
        <img
          :src="list.src"
          class="image h-[120px] w-[120px] object-cover"
          alt="product"
        />
      </div>
      <div class="flex flex-grow flex-col">
        <p class="mb-1 font-700">{{ list.name }}</p>
        <p class="mb-1 font-500">
          {{ list.firstDate[0] }} {{ list.firstDate[1] }} —
          {{ list.lastDate[0] }} {{ list.lastDate[1] }}
        </p>
        <div class="flex items-center">
          <p class="mr-2 font-300 text-muted">{{ list.type }}</p>
          <p class="text-sm text-muted">${{ useThousands(list.price) }}</p>
        </div>
        <p class="mt-auto text-m font-700">
          NT${{ useThousands(list.price * list.quantity) }}
        </p>
      </div>
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="lineHeight-none mb-1 lg:order-3 lg:mb-0">
          <span
            class="material-icons block cursor-pointer"
            :data-id="list.id"
            data-action="add"
            @click="patchCartItem(list.id, 'add')"
            >add</span
          >
        </div>
        <div class="px-1 text-m font-700 md:px-3">{{ list.quantity }}</div>
        <div class="lineHeight-none mt-1 lg:order-first lg:mt-0">
          <span
            class="material-icons block cursor-pointer"
            :data-id="list.id"
            data-action="minus"
            @click="patchCartItem(list.id, 'minus')"
            >remove</span
          >
        </div>
      </div>
    </li>
  </div>
</template>
<style lang="scss" scoped></style>
