import {
  SUCCESS
 } from "./constants";

 const loginReducers = (state = false, action) => {
   switch (action.type) {
     case SUCCESS:
       return true;

     default:
       return state;
   }
 };

 export default loginReducers;
