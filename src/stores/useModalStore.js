export const ModalStore = defineStore('modal', () => {
  let body = ref(null);
  const isModal = ref(false);
  const isCart = ref(false);
  const isSign = ref(false);

  // Cart
  const OpenCart = () => {
    isCart.value = !isCart.value;
    OpenModal();
  };
  const CloseCart = () => {
    isCart.value = !isCart.value;
    CloseModal();
  };

  // Sign
  const OpenSign = () => {
    isSign.value = !isSign.value;
    OpenModal();
  };
  const CloseSign = () => {
    isSign.value = !isSign.value;
    CloseModal();
  };

  // Modal
  const OpenModal = () => {
    isModal.value = !isModal.value;
    body.classList.add('active');
  };
  const CloseModal = () => {
    isModal.value = !isModal.value;
    isCart.value = false;
    isSign.value = false;
    body.classList.remove('active');
  };

  onMounted(() => {
    body = document.querySelector('body');
  });

  return {
    isModal,
    isCart,
    isSign,
    CloseModal,
    OpenCart,
    OpenSign,
    CloseCart,
    CloseSign,
  };
});
