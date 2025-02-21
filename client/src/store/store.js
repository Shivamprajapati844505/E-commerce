import {configureStore} from '@reduxjs/toolkit';
import authReducer from'./auth-slice'
import adminProductsSlice from './admin/products-slice/index';
import shopProductsSlice from './shop/products-slice/index';
import shopCartSlice from './shop/cart-slice/index';
import shopAddressSlice from './shop/address-slice';
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice/index";

const store = configureStore({
    reducer:{
   auth:authReducer,
   adminProducts: adminProductsSlice,
   shopProducts: shopProductsSlice,
   
   shopCart :shopCartSlice,
   shopAddress :shopAddressSlice,
   shopOrder: shopOrderSlice,
   shopSearch: shopSearchSlice,
   shopReview: shopReviewSlice,
   commonFeature: commonFeatureSlice,
    }
})


export default store;