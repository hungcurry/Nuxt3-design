<script setup>
import SlotCheckTitle from '@/components/Slots/SlotCheckTitle.vue';
const CartStore = useCartStore();
// 總金額
const { total } = storeToRefs(CartStore);

// ===================
// ... 優惠碼 ...
// ===================
const isCode = ref(true);
const codeAry = ref(['TG87526', 'TG87530', 'TG87534']);
const codeMessage = ref('');
const codePrice = ref(0);
const codeInput = ref(null);
const checkCode = ref('測試碼:TG87526');

const changeHandler = () => {
  const isNum = codeAry.value.includes(checkCode.value);
  if (isNum) {
    isCode.value = false;
    codePrice.value = 2000;
    codeMessage.value = '優惠碼已生效';
  } else {
    isCode.value = true;
    codePrice.value = 0;
    codeMessage.value = '無效密碼';
  }
};
onMounted(() => {
  codeInput.value.addEventListener('input', changeHandler);
});
</script>
<template>
  <main>
    <div class="container">
      <TimeLine />
      <div class="row">
        <div class="col-lg-4 lg:order-last lg:flex lg:flex-col lg:flex-nowrap">
          <slot-check-title>訂購人資訊</slot-check-title>
          <form class="lg:flex-grow">
            <div class="mb-5">
              <label for="checkEmail" class="form-label mb-1 block text-black"
                >Email</label
              >
              <input
                type="email"
                name="dataEmail"
                id="checkEmail"
                class="form-control w-full rounded-lg border-gray-300 text-base focus:border-primary focus:ring-primary"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div class="mb-5">
              <label for="checkName" class="form-label mb-1 block text-black"
                >姓名</label
              >
              <input
                type="text"
                name="dataName"
                id="checkName"
                class="form-control w-full rounded-lg border-gray-300 text-base focus:border-primary focus:ring-primary"
                placeholder="請輸入 姓名"
                required
              />
            </div>
            <div class="mb-5">
              <label for="checkPhone" class="form-label mb-1 block text-black"
                >聯絡電話</label
              >
              <input
                type="tel"
                name="dataPhone"
                id="checkPhone"
                class="form-control w-full rounded-lg border-gray-300 text-base focus:border-primary focus:ring-primary"
                placeholder="請輸入電話"
                required
              />
            </div>
            <div class="mb-5">
              <label for="checkCode" class="form-label mb-1 block text-black"
                >優惠碼</label
              >
              <input
                v-model.trim="checkCode"
                ref="codeInput"
                type="text"
                id="checkCode"
                class="form-control w-full rounded-lg border-gray-300 text-base text-primary focus:border-primary focus:ring-primary"
                placeholder="測試碼:TG87526"
                required
              />
            </div>
            <small class="mb-10 block text-end text-primary">{{
              codeMessage
            }}</small>
          </form>
          <div class="mb-6 lg:mb-3">
            <!-- 小計 -->
            <div
              class="mb-1 flex items-center justify-between font-500 lg:mb-0"
            >
              <span>小計:</span>
              <div class="flex items-center">
                <span class="mr-1">NT$</span>
                <span class="text-m font-700 text-secondary">{{
                  useThousands(total)
                }}</span>
              </div>
            </div>
            <!-- 折扣 -->
            <div
              class="mb-2 flex items-center justify-between"
              :class="{ hidden: isCode }"
            >
              <span class="font-500">折扣:</span>
              <div class="font-300">
                <span class="mr-1">- NT$</span>
                <span class="text-m">{{ useThousands(codePrice) }}</span>
              </div>
            </div>
            <!-- 總金額 -->
            <div class="flex items-center justify-between text-m font-500">
              <span>總金額:</span>
              <div class="flex items-center">
                <span class="mr-1">NT$</span>
                <span class="text-xl font-700 text-secondary">{{
                  useThousands(total - codePrice)
                }}</span>
              </div>
            </div>
          </div>
          <a
            href="./checkoutC"
            class="w-100 btn-secondary btn-lg btn hidden h-auto py-3 text-base text-white lg:block"
            >下一步</a
          >
        </div>
        <div class="col-lg-8 lg:flex lg:flex-col">
          <CardListRow />
          <div class="row pt-7 pb-10 lg:pt-3 lg:pb-0">
            <div class="col-6 col-lg-3">
              <a
                href="./checkoutA"
                class="btn-outline btn-lg btn h-auto w-full border-primary py-2 text-base text-primary hover:bg-primary hover:text-white"
                >返回</a
              >
            </div>
            <div class="col-6">
              <a
                href="./checkoutC"
                class="btn-secondary btn-lg btn h-auto w-full py-2 align-middle text-base lg:hidden"
                >下一步</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
