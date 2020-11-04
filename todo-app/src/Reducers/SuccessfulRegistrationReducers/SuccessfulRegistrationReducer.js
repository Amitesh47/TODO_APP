const successfulRegistrationReducer = (state = false, { type }) => {
  switch(type) {
    case 'REGISTRATION_SUCCESS' :
      return true ;
    case 'RESET_REGISTRATION' :
      return false;
    default :
    return state;
  }
}

export default successfulRegistrationReducer
