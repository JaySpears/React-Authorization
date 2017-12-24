 const initialState = {
   isAuthorized: null
 };

 /**
  * function requestHandlingReducer, reducer switch statement
  * for request action options.
  *
  * @param  {Object} state
  * @param  {Object} action
  */
 function authorizationReducer(state = initialState, action){
   switch (action.type) {
     case 'IS_AUTHORIZED' : {
       return Object.assign({}, state, {
         isAuthorized: action.isAuthorized
       });
     }
     default:
       return state
   }
 }

 export default authorizationReducer;
