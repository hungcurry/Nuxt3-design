export const UserStore = defineStore('user', () => {
  const router = useRouter();
  const CartStore = useCartStore();
  const { cartAry } = CartStore;
  // 總金額
  const { total } = storeToRefs(CartStore);
  // ===================
  // ... 優惠碼 ...
  // ===================
  const isCode = ref(false);
  const codeAry = ref(['TG87526', 'TG87530', 'TG87534']);
  const codeMessage = ref('');
  const codePrice = ref(0);
  // ===================
  // ... form ...
  // ===================
  const checkEmail = ref('');
  const checkName = ref('');
  const checkPhone = ref('');
  const checkCode = ref('測試碼:TG87526');
  const checkCredit = ref('');
  const checkDate = ref('');
  const checkPassword = ref('');

  const changeHandler = e => {
    const isNum = codeAry.value.includes(e.target.value);
    if (isNum) {
      isCode.value = true;
      codePrice.value = 2000;
      codeMessage.value = '優惠碼已生效';
    } else {
      isCode.value = false;
      codePrice.value = 0;
      codeMessage.value = '無效密碼';
    }
  };
  // ===================
  // ... 頁面處理 ...
  // ===================
  let user = {};
  const firstCheck = () => {
    if (cartAry.length === 0) {
      window.alert(`請加入 至少一個 購物車品項！`);
    }
    router.push({ path: `/Process/checkoutA` });
  };
  const nextCheck = () => {
    if (cartAry.length === 0) {
      window.alert(`請加入 至少一個 購物車品項！`);
      return;
    }
    router.push({ path: `./checkoutB` });
  };
  const orderCheck = () => {
    if (
      checkEmail.value === '' ||
      checkName.value === '' ||
      checkPhone.value === ''
    ) {
      window.alert(`請輸入 完整資料`);
      return;
    }
    router.push({ path: `./checkoutC` });
  };
  const createOrder = () => {
    if (
      checkCredit.value === '' ||
      checkDate.value === '' ||
      checkPassword.value === ''
    ) {
      window.alert(`請輸入 完整資料`);
      return;
    }

    user = {
      email: checkEmail.value,
      name: checkName.value,
      tel: checkPhone.value,
      credit: checkCredit.value,
      date: checkDate.value,
      password: checkPassword.value,
    };
    cartAry.length = 0;
    total.value = 0;
    // axios API 送出 user資料...
    // console.log(user);
    router.push({ path: `./checkoutD` });
  };

  return {
    isCode,
    codeMessage,
    codePrice,
    codeAry,
    // --------form-----------
    checkEmail,
    checkName,
    checkPhone,
    checkCode,
    checkCredit,
    checkDate,
    checkPassword,
    // --------handle-----------
    changeHandler,
    firstCheck,
    nextCheck,
    orderCheck,
    createOrder,
  };
});
