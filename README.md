# 樂悠悠 TICKET BAZAAR

![](https://i.imgur.com/JknYixB.jpg)

## 簡介
樂悠悠 票務集市

1. 擁有簡單易用的介面，您可以輕鬆找到您需要的信息
1. 預訂您的門票，開始享受您的售票、活動之旅！

Demo： https://nuxt3-design.vercel.app/ 


## 頁面：
* 首頁 index
* 音樂售票 Music
* 設計售票 Design
* 美食售票 Food
* 電影售票 Movie
* 產品頁 Product
* 結帳流程 Process


## 專案說明
* 使用 Vue3 Composition開發
* 使用 Pinia 管理共用資料
* 使用 Nuxt3 開發SSR網站以符合SEO需求
* 使用 Node Express開API( 更新 )


### 使用技術/相關套件
* Composition API
* Nuxt3、Vue Router、Pinia
* Tailwind CSS 3.0
* Daisyui
* ESLint、Stylelint代碼規範與排版
* SCSS
* Swiper
* axios


## 重點功能展示：
1. 首頁捲軸動畫
1. 購物車數量加減
1. 動態產品[id]頁
1. 優惠碼判斷
1. Vue組件模組化拆分
1. 暗模式切換( 更新 )
1. 分頁功能( 更新 )
1. 手刻Carousel( 更新 )

### (一).首頁捲軸動畫
> 1. 控制卷軸，呈現畫面縮放，並秀出隱藏文案
> 2. 控制多張圖片輪播，並交錯淡入淡出

![](https://i.imgur.com/gapiUUC.jpg)


### (二).購物車
> 1. 功能:串接API 數量加減、刪除功能
> 2. 防呆:購物車無產品時，無法前往結賬頁
> 3. 判斷:進入結帳頁後，購物車無法調動數量與按鈕Disabled
> 4. 手刻:Offcanvas元件

![](https://i.imgur.com/H75Tco9.png)


### (三).動態Route [id]頁判斷
> 正確路徑=> 轉址動態[id]頁

![](https://i.imgur.com/cxGIAxT.png)

> 錯誤路徑=>轉址回首頁

![](https://i.imgur.com/bjhPPNE.png)
![](https://i.imgur.com/Ay1SVLb.png)
![](https://i.imgur.com/0Cz6487.png)


### (四).錯誤頁處理
![](https://i.imgur.com/TAVsIEO.jpg)

![](https://i.imgur.com/mU64W7b.jpg)

![](https://i.imgur.com/FNE92Xw.png)


### (五).優惠碼判斷
> 1. 防呆: 是否輸入有效的 優惠碼
> 2. 判斷: 金額不足3000，無法使用，防止負毛
> 3. 領取優惠碼，折扣1000


![](https://i.imgur.com/3cGNqJ1.jpg)

![](https://i.imgur.com/OktRDKi.jpg)

![](https://i.imgur.com/nTGK8AC.jpg)

### (六).分頁功能
> 1. 分頁邏輯判斷  每頁取出３筆資料呈現
> 2. 左右按鈕判斷  呈現下一筆資料或隱藏disabled

![](https://i.imgur.com/ifX2nlb.png)



### (七).暗模式切換 搭配
> 1. 暗模式切換功能
> 2. 搭配localStorage 儲存使用者模式

![](https://i.imgur.com/57FZzA9.png)


### (八).Ｍodal製作
> 1. 右下綠色框框連結，註冊與登入可以即時切換
> 2. 橫向手機375測試，出現卷軸
> 3. 拆分Modal和Backdrop元件

![](https://i.imgur.com/HCu6Dpj.png)


### (九).表單
> 防呆: input輸入完整資料，才可進行下一步驟

![](https://i.imgur.com/dhOrSut.jpg)


### (十).圖片輪播
> 手刻Carousel 平移圖片輪播

桌機
![](https://i.imgur.com/WMvTKnB.png)
平板
![](https://i.imgur.com/f532PzV.png)
手機
![](https://i.imgur.com/OuQ1YR7.png)


### (十ㄧ).手刻元件
> 1. 元件：TimeLine
> 2. 元件：手機選單
> 3. 元件：ticket tabs選單

![](https://i.imgur.com/73y46nN.jpg)


### (十二).細節注意處理
> 1. 各解析度RWD，畫面順暢度
> 2. 文案增減是否出現...
> 3. 數字過長時，版面是否跑版
> 4. 金額千分位符號

