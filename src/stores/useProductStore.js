export const ProductStore = defineStore('product', () => {
  const listObj = reactive({ data: {} });
  return {
    listObj,
  };
});
