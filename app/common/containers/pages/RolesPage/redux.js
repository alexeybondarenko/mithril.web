import { combineReducers } from 'redux';
import { handleAction, createAction } from 'redux-actions';
import * as fromRoles from 'redux/roles';

export const getRoles = createAction('rolesPage/GET_ROLES');

export const fetchRoles = () => dispatch =>
  dispatch(fromRoles.fetchRoles())
  .then((action) => {
    if (action.error) throw action;
    dispatch(getRoles(action.payload.result));
    return action;
  });

const roles = handleAction(getRoles, (state, action) => action.payload, []);

export default combineReducers({
  roles,
});
