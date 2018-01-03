 const initialState = {
   user: {}
 };

 /**
  * function requestHandlingReducer, reducer switch statement
  * for request action options.
  *
  * @param  {Object} state
  * @param  {Object} action
  */
 function userReducer(state = initialState, action){
   switch (action.type) {
     case 'SET_USER' : {
       return Object.assign({}, state, {
         user: action.user
       });
     }
     default:
       return state
   }
 }

 export default userReducer;
