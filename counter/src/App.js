import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import { Counter } from './components';
import { Header } from './components/common';

const reducers = combineReducers({
 counter: counterReducer
 })

class App extends Component {
	render(){
		return(
        <Provider store={createStore(reducers)}>	
				<Counter />		
		</Provider>
		)	   
	}
}
export default App;