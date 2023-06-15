import { AppState } from "./AppState";
import type { LoginActions } from "./action";

const initialState: AppState = {
  loggedIn: false,
  loggedUser: { name: '', email: '', password: '' }
}

export const rootReducer = (state: AppState = initialState, action: LoginActions) => {
  switch (action.type) {
    case 'login': return { ...state, loggedUser: action.loggedUser, loggedIn: true }
    case 'logout': return initialState
  }
  return state
}