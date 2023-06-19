import type { State, Actions } from './types'

const initialState: State = {
  humorText: '',
  errorMessage: '',
  loading: false
}

export const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case '@humor/setHumor':
      return { ...state, humorText: action.humorText }
    case '@humor/setErrorMessage':
      return {...state, errorMessage: action.errorMessage}
    case '@humor/setLoading':
      return {...state, loading: action.loading}
  }
  return state
}