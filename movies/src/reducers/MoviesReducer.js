import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    movies: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
     switch (action.type){
         case LOAD_MOVIES:
              return { ...state, loading: true }
         case LOAD_MOVIES_SUCCESS:
              return { ...state, loading: false, movies: action.payload }     
         default:
              return state;     
     }
}