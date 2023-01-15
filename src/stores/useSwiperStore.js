import love1 from '@/assets/images/love-1.jpg';
import love2 from '@/assets/images/love-2.jpg';
import love3 from '@/assets/images/love-3.jpg';
import love4 from '@/assets/images/love-4.jpg';
import love5 from '@/assets/images/love-5.jpg';
import love6 from '@/assets/images/love-6.jpg';
import love7 from '@/assets/images/love-7.jpg';
import love8 from '@/assets/images/love-8.jpg';
import love9 from '@/assets/images/love-9.jpg';
export const SwiperStore = defineStore('swiper', () => {
  const listArr = reactive([
    {
      name: '2023 空間設計',
      src: `${love1}`,
      price: '699',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '2023會演是英雄',
      src: `${love2}`,
      price: '3500',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '高雄設計節',
      src: `${love3}`,
      price: '2600',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '螺旋線上設計展',
      src: `${love4}`,
      price: '899',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '瘋設計體驗',
      src: `${love5}`,
      price: '580',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '台南藝術畫廊',
      src: `${love6}`,
      price: '799',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '百味人生設計展',
      src: `${love7}`,
      price: '599',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '潮豐設計展',
      src: `${love8}`,
      price: '1300',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '全球巡迴設計',
      src: `${love9}`,
      price: '2540',
      date: '2023/02/25 ~ 2023/02/26',
    },
  ]);
  return {
    listArr,
  };
});
