import { combineReducers } from 'redux';
import { feedbackReducer, newsReducer} from './listsSlice';

const rootReducer = combineReducers({
  feedback: feedbackReducer,
  news: newsReducer
});

export default rootReducer;
