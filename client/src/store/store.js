import {configureStore} from '@reduxjs/toolkit';
import authReducer from'./auth-slice'
import adminProductsSlice from './admin/products-slice/index';
import shopProductsSlice from './shop/products-slice/index';
import shopCartSlice from './shop/cart-slice/index';
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice";

const store = configureStore({
    reducer:{
   auth:authReducer,
   adminProducts: adminProductsSlice,
   shopProducts: shopProductsSlice,
   shopCart :shopCartSlice,
   shopReview: shopReviewSlice,
   commonFeature: commonFeatureSlice,
    }
})


export default store;