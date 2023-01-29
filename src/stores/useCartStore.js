import product1 from '@/assets/images/Product/product-1.jpg';
import product2 from '@/assets/images/Product/product-2.jpg';
import product3 from '@/assets/images/Product/product-3.jpg';
import product4 from '@/assets/images/Product/product-4.jpg';
import product5 from '@/assets/images/Product/product-5.jpg';
import product6 from '@/assets/images/Product/product-6.jpg';

export const CartStore = defineStore('cart', () => {
  const cartAry = reactive([
    {
      orderId: '2PpFq222',
      id: 222,
      name: '2023 鏡幻像',
      src: `${product1}`,
      price: 899,
      type: '全票',
      firstDate: ['03', 'JUN'],
      lastDate: ['15', 'OCT'],
      quantity: 4,
    },
    {
      orderId: '2PpFq555',
      id: 555,
      name: '探索古文明世界',
      src: `${product2}`,
      price: 799,
      type: '學生',
      firstDate: ['07', 'FEB'],
      lastDate: ['1', 'NOV'],
      quantity: 6,
    },
    {
      orderId: '2PpFq443',
      id: 443,
      name: 'COLOR RUN路跑',
      src: `${product3}`,
      price: 1999,
      type: '愛心',
      firstDate: ['10', 'AUG'],
      lastDate: ['12', 'AUG'],
      quantity: 2,
    },
    {
      orderId: '2PpFq77',
      id: 77,
      name: '2023紫色派對',
      src: `${product4}`,
      price: 899,
      type: '全票',
      firstDate: ['03', 'APR'],
      lastDate: ['06', 'APR'],
      quantity: 10,
    },
    {
      orderId: '2PpFq85',
      id: 85,
      name: '古典提琴音樂會',
      src: `${product5}`,
      price: 2999,
      type: '學生',
      firstDate: ['07', 'SEP'],
      lastDate: ['10', 'SEP'],
      quantity: 2,
    },
    {
      orderId: '2PpFq93',
      id: 93,
      name: '文文大師鋼琴獨秀',
      src: `${product6}`,
      price: 3999,
      type: '愛心',
      firstDate: ['10', 'NOV'],
      lastDate: ['15', 'NOV'],
      quantity: 1,
    },
  ]);
  const numPatch = ref(0);
  const total = ref(0);

  const patchCartItem = (id, str) => {
    cartAry.forEach(item => {
      if (item.id === id) {
        numPatch.value = item.quantity;
      }
    });

    if (str === 'add') {
      numPatch.value += 1;
    }
    if (str === 'minus') {
      numPatch.value -= 1;
      if (numPatch.value < 1) {
        numPatch.value = 1;
      }
    }
    update(id);
  };

  // 更新
  const update = id => {
    cartAry.forEach(item => {
      if (item.id === id) {
        item.quantity = numPatch.value;
      }
    });
    // 總金額
    total.value = 0;
    cartAry.forEach(list => {
      total.value += list.price * list.quantity;
    });
  };

  onMounted(() => {
    cartAry.forEach(list => {
      total.value += list.price * list.quantity;
    });
  });
  return { cartAry, patchCartItem, total };
});
