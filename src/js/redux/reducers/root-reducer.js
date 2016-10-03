import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import overview from './overview-reducer';
import entities from './entities-reducer'

const reducer = combineReducers({
  form: formReducer,
  overview,
  entities
})

export default reducer;
