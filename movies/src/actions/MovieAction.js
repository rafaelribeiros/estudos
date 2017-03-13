import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS } from './types';
import data from '../reducers/Movies.json';

export const loadMovies = () => {
    return(dispatch) => {
        dispatch({ type: LOAD_MOVIES });
        dispatch({ type: LOAD_MOVIES_SUCCESS, payload: data });
    }
}