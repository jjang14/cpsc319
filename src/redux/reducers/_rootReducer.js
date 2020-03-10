import { combineReducers } from 'redux';
import users from './usersReducer';
import projects from './projectsReducer';
import locations from './locationsReducer';
import skills from './skillsReducer';
import disciplines from './disciplinesReducer';

const rootReducer = combineReducers({
  users: users,
  projects: projects,
  locations: locations,
  skills: skills,
  disciplines: disciplines,
});

export default rootReducer;
