import * as types from './actionTypes';
import { SVC_ROOT } from '../../config/config';
import { headers } from '../../config/adalConfig';
import axios from 'axios';

const baseURL = `${SVC_ROOT}disciplines/`;

export const loadDisciplinesAllData = disciplines => {
  return { type: types.LOAD_DISCIPLINES_ALL, disciplines: disciplines };
};

export const loadDisciplines = () => {
  return dispatch => {
    return axios
      .get(baseURL, { headers })
      .then(response => {
        dispatch(loadDisciplinesAllData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
