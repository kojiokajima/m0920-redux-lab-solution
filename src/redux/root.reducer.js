import { combineReducers } from 'redux'
import personReducer from './person.reducer'
import countReducer from './count.reducer';
import postsReducer from './post.reducer';

const rootReducer = combineReducers({
    people: personReducer,
    counter: countReducer,
    postsObj: postsReducer 
})

export default rootReducer