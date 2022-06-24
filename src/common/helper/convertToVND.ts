export const convertNumberToVND = (price: number) => {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};
