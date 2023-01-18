import product1 from '@/assets/images/product-1.jpg';
import product2 from '@/assets/images/product-2.jpg';
import product3 from '@/assets/images/product-3.jpg';
import product4 from '@/assets/images/product-4.jpg';
import product5 from '@/assets/images/product-5.jpg';
import product6 from '@/assets/images/product-6.jpg';
import product7 from '@/assets/images/product-7.jpg';
import product8 from '@/assets/images/product-8.jpg';
import product9 from '@/assets/images/product-9.jpg';
export const ProductStore = defineStore('product', () => {
  const listObj = reactive({
    '/': [
      {
        id: 286,
        name: '2023 台味設計展',
        src: `${product1}`,
        price: '699',
        text: '一年一度的台味設計展由經濟部工業局主辦、台灣創意設計中心執行，每年，針對在地生活、文化及產業發展特色，運用設計思考詮釋新時代的意涵，並以展覽呈現在地設計。',
        firstDate: ['01', 'JUN'],
        lastDate: ['31', 'OCT'],
      },
      {
        id: 419,
        name: '光影設計展',
        src: `${product2}`,
        price: '780',
        text: '這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題，創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。',
        firstDate: ['03', 'FEB'],
        lastDate: ['11', 'NOV'],
      },
      {
        id: 300,
        name: '高雄設計節',
        src: `${product3}`,
        price: '2999',
        text: '設計大高雄究竟是怎麼一回事？在這「設計」詞彙有點氾濫的年代，或許我們也搞不清楚究竟誰被誰設計了，設計生活？還是被生活設計？而當高雄這座城市建設硬體已相當程度完備時，文化軟實力又該如何輸出？',
        firstDate: ['12', 'AUG'],
        lastDate: ['12', 'DEC'],
      },
    ],
    Music: [
      { id: 232, name: '2023 音樂節', src: `${product4}` },
      { id: 555, name: '音樂節02', src: `${product5}` },
      { id: 443, name: '音樂節03', src: `${product6}` },
    ],
    Design: [
      { id: 254, name: '2023設計展', src: `${product7}` },
      { id: 756, name: '台味設計展', src: `${product8}` },
      { id: 123, name: '台南設計展', src: `${product9}` },
    ],
  });
  return {
    listObj,
  };
});
