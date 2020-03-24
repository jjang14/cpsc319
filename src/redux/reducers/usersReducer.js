import * as types from '../actions/actionTypes';
import initialState from './_initialState';

const executeLoadUsersAllData = action => {
  return action.users;
};

const executeCreateUserData = (state, action) => {
  return [...state, {...action.user}];
};

const executeUpdateUserData = (state, action) => {
  return [...state, {...action.user}];
};

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return executeCreateUserData(state,action);
    case types.LOAD_USERS_ALL:
      return executeLoadUsersAllData(action);
    default:
      return state;
  }
};


export default usersReducer;
