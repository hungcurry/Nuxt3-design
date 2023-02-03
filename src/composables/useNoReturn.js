export const useNoReturn = () => {
  const noReturn = () => {
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, null, window.location.href);
    });
  };
  return {
    noReturn,
  };
};
