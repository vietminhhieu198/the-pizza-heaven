import { routerPath } from 'common/config/router/router.path';
import { IOrderStatus } from 'common/types/order.model';

export const CATEGORY_TABLE_HEAD = ['id', 'name', 'action'];

export const PRODUCT_TABLE_HEAD = [
  'id',
  'categoryName',
  'thumbnail',
  'name',
  'description',
  'price',
  'isStocked',
  'action',
];

export const PRODUCT_IN_CART_TABLE_HEAD = [
  'thumbnail',
  'name',
  'price',
  'quantity',
  'total',
  'action',
];

export const ORDER_DETAIL_TABLE_HEAD = [
  'ordinalNumber',
  'thumbnail',
  'name',
  'price',
  'quantity',
  'total',
  'action',
];

export const ADMIN_ORDER_DETAIL_TABLE_HEAD = [
  'ordinalNumber',
  'thumbnail',
  'name',
  'price',
  'quantity',
  'total',
];

export const ORDER_TABLE_HEAD = [
  'id',
  'user',
  'firstName',
  'lastName',
  'phone',
  'address',
  'totalPrice',
  'status',
  'action',
];

export const PRODUCT_SELECT_IS_STOCK = [
  {
    value: true,
    label: 'Yes',
  },
  {
    value: false,
    label: 'No',
  },
];

export const ORDER_SELECT_STATUS = [
  {
    value: IOrderStatus.CONFIRM,
    label: IOrderStatus.CONFIRM.toUpperCase(),
  },
  {
    value: IOrderStatus.COMPLETE,
    label: IOrderStatus.COMPLETE.toUpperCase(),
  },
  {
    value: IOrderStatus.CANCEL,
    label: IOrderStatus.CANCEL.toUpperCase(),
  },
];

export const IMAGE_BANNER_SLIDER = [
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-4.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-5.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-6.jpg',
  },

  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-8.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-9.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-1.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-2.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-3.jpg',
  },
  {
    url: 'https://res.cloudinary.com/duitozhul/image/upload/v1655983706/the-pizza-heaven/slider/banner-7.jpg',
  },
];

export const FOOTER_TOP_ARR = [
  {
    image:
      'https://res.cloudinary.com/duitozhul/image/upload/v1655996501/the-pizza-heaven/footer/footer_01_s773a5.png',
    title: 'Ch???t l?????ng d???n ?????u',
    description:
      'Ch?? tr???ng kh??u tuy???n ch???n ?????i ng?? ?????u b???p chuy??n nghi???p, th???c ????n c???a Pizza Express lu??n ???????c ?????i m???i, ??a d???ng v???i pizza nhi???u h????ng v???, sandwich, m??? ?? v?? c??c m??n ??n nhanh kh??c.',
  },
  {
    image:
      'https://res.cloudinary.com/duitozhul/image/upload/v1655996540/the-pizza-heaven/footer/footer_02_cqwd8g.png',
    title: 'Giao h??ng ????ng gi???',
    description:
      '????? t??ng c?????ng s??? tin t?????ng v?? y??n t??m v???i kh??ch h??ng, Pizza Express cam k???t lu??n giao h??ng ????ng gi??? v?? chi ph?? giao h??ng r??? nh???t ????? ?????m b???o kh??ch h??ng c?? th??? nh???n b??nh trong th???i gian nhanh nh???t.',
  },
  {
    image:
      'https://res.cloudinary.com/duitozhul/image/upload/v1655996554/the-pizza-heaven/footer/footer_03_y5loju.png',
    title: 'Pizza take away',
    description:
      'L???a ch???n cho m??nh m???t h?????ng ??i m???i ????? t???o n??n s??? kh??c bi???t, m?? h??nh Pizza take away - pizza mang ??i gi??p kh??ch h??ng ti???t ki???m th???i gian, ??em ?????n s??? ti???n l???i t???i ??u trong vi???c l???a ch???n, thanh to??n, ????ng g??i v?? nh???n h??ng.',
  },
  {
    image:
      'https://res.cloudinary.com/duitozhul/image/upload/v1655996586/the-pizza-heaven/footer/footer_04_mbkm54.png',
    title: 'Ph???c v??? chuy??n nghi???p',
    description:
      'Pizza Express c??ng v???i ?????i ng?? nh??n vi??n mang ?????y s???c tr??? v?? nhi???t huy???t, ch??ng t??i lu??n mong mu???n ??em l???i cho kh??ch h??ng c???a m??nh ch???t l?????ng d???ch v??? t???t nh???t, lu??n l???ng nghe v?? ch??m s??c nh???ng nhu c???u d?? l?? nh??? nh???t c???a Qu?? kh??ch.',
  },
];

export const NAVBAR_ATTRIBUTE = {
  APP: [
    {
      name: 'Home',
      path: routerPath.common.HOME,
    },
    {
      name: 'Menu',
      path: '/#menu',
    },
    {
      name: 'Contact',
      path: '/#contact',
    },
    {
      name: 'Order',
      path: routerPath.app.ORDER_SEARCH,
    },
  ],
  ADMIN: [
    {
      name: 'Dashboard',
      path: routerPath.admin.DASHBOARD,
    },
    {
      name: 'Category',
      path: routerPath.admin.CATEGORY_LIST,
    },
    {
      name: 'Product',
      path: routerPath.admin.PRODUCT_LIST,
    },
    {
      name: 'Order',
      path: routerPath.admin.ORDER_LIST,
    },
  ],
};

export const ACCOUNT_ATTRIBUTE = {
  NOT_LOGIN: [
    {
      attribute: 'Sign up',
      path: routerPath.auth.USER_REGISTER,
    },
    {
      attribute: 'Log in',
      path: routerPath.auth.LOGIN,
    },
  ],
  CLIENT_ACCOUNT: [
    {
      attribute: 'My Account',
      path: routerPath.app.MY_ACCOUNT,
    },
    {
      attribute: 'Log out',
      path: routerPath.common.HOME,
    },
  ],
  ADMIN_ACCOUNT: [
    {
      attribute: 'Management',
      path: routerPath.admin.DASHBOARD,
    },
    {
      attribute: 'Log out',
      path: routerPath.common.HOME,
    },
  ],
};

export interface ISelect {
  value: string;
  label: string;
}

export const PRODUCT_FILTER_ATTRIBUTE: ISelect[] = [
  {
    value: 'id',
    label: 'Best seller',
  },
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'price',
    label: 'Price',
  },
];

export const ORDER_FILTER_ATTRIBUTE: ISelect[] = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'confirmed',
    label: 'Confirmed',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
];

export const PRODUCT_ORDER_BY_ATTRIBUTE: ISelect[] = [
  {
    value: 'asc',
    label: 'Ascending',
  },
  {
    value: 'desc',
    label: 'Descending',
  },
];

export const ORDER_ORDER_BY_ATTRIBUTE: ISelect[] = [
  {
    value: 'desc',
    label: 'Latest',
  },
  {
    value: 'asc',
    label: 'Oldest',
  },
];

export const CHECKOUT_STEP = [
  'Order form',
  'Order information',
  'Payment information',
];
