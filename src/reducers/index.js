import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import skillReducer from './skillReducer';
import skillSubmittedReducer from './skillSubmittedReducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    skills: skillReducer,
    skillsSubmitted: skillSubmittedReducer
});

export default rootReducer;