import { 
 SIGNED_IN, 
 SIGNED_OUT,
 SIGNIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
 user: '',
 error: {
  message: ''	
 }
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case SIGNED_IN:
   return { ...state, user: action.payload };
  case SIGNED_OUT:
   return INITIAL_STATE;
  case SIGNIN_FAILED:
   return { ...state, error: action.payload };
  default:
   return state;	
 }
};
