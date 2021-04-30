/*
 * combines all th existing reducers
 */
import * as superHeroReducer from './superHeroReducer';
import * as themeReducer from './themeReducer';
import * as loadingReducer from './loadingReducer';

export default Object.assign(superHeroReducer, loadingReducer, themeReducer);
