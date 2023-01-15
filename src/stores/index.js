// AddCount
import { CountStore } from './useCountStore.js';
// Fetch axios
import { FetchStore } from './useFetchStore.js';
// windows position
import { PositionStore } from './usePositionStore.js';
// swiper
import { SwiperStore } from './useSwiperStore.js';

export const useCountStore = CountStore;
export const useFetchStore = FetchStore;
export const usePositionStore = PositionStore;
export const useSwiperStore = SwiperStore;
