import { configureStore } from '@reduxjs/toolkit';
// TODO: import slice

export const store = configureStore({
	// TODO: add slice
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;