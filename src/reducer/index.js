import { combineReducers } from 'redux';

import volume from './volume';
import controls from './controls';

export default combineReducers({
  volume,
  controls
});
