import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import MovieNameReducer from './MovieNameReducer';

export default combineReducers({
 movies: MoviesReducer,
 name: MovieNameReducer
})