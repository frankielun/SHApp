import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from '../store/reducers'; // where reducers is a object of reducers
import sagas from '../store/sagas';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig: any = { enhancers };
const store = createStore(reducers, undefined, composeEnhancers(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
