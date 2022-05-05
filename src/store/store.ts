// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import { AppStore } from "../types";
import createRootReducer from "../reducers";
import rootSaga from "../sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ trace: true});

export const Store = (initialState: Partial<AppStore> = {}) => {
  const middleWares = [];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    });
    middleWares.push(logger);
  }
  middleWares.push(routerMiddleware(history));
  middleWares.push(sagaMiddleware);

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleWares)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = Store();