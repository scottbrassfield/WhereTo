import { createStore } from 'redux';
import reducer from './reducers/root-reducer'

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension())

export default store;
