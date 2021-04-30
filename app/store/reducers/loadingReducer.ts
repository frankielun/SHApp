/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';
import { ILoading } from '../../models/reducers/loading';

const initialState: ILoading = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.SUPERHERO_REQUEST]: (state: ILoading) => {
    return { ...state, isLoginLoading: true };
  },
  [types.SUPERHERO_SEARCH_RESPONSE]: (state: ILoading) => {
    return { ...state, isLoginLoading: false };
  },
  [types.SUPERHERO_SEARCH_FAILED]: (state: ILoading) => {
    return { ...state, isLoginLoading: false };
  },
});
