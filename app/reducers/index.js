'use strict';

import { combineReducers } from 'redux';
import login from './LoginReducers';
import mask from './MaskReducers';
import Financing from './FinancingReducers';

const rootReducer = combineReducers({
  login,
  mask,
  Financing
})

export default rootReducer