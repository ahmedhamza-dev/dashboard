import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modeSlice from './slices/mode.slice';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userSlice from './slices/user.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { categoryApi } from '../pages/Dashboard/Category/api';
import { HealPackageApi } from '../pages/Dashboard/HealPackage/api';

const persistConfig = {
  key: 'root',
  storage,
};
const userReducer = combineReducers({
  mode: modeSlice.reducer,
  user: userSlice.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [HealPackageApi.reducerPath]: HealPackageApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }).concat(thunk, categoryApi.middleware, HealPackageApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
