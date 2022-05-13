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
// ブラウザのdevelop toolを有効になる
const composeEnhancers = composeWithDevTools({ trace: true});

export const Store = (initialState: Partial<AppStore> = {}) => {
  const middleWares = [];
  // 開発環境場合、reduxのログを出力
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    });
    middleWares.push(logger);
  }
  // router追加
  middleWares.push(routerMiddleware(history));
  // saga追加
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