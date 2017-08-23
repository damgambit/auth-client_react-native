import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducer';


var defaultState = {
	alerts: []
};


exports.configureStore = (initialState = defaultState) => {
	var store = createStore(reducer, initialState, compose(
		applyMiddleware(thunk),
		autoRehydrate()
	));
	persistStore(store, {storage: AsyncStorage});
	return store;
}