const INITIAL_STATE = {
  idTokenParsed: {
    name: 'redux-user-default-state',
  },
};

const keycloak = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default keycloak;
