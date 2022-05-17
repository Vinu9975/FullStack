import {FETCH,CREATE,UPDATE,DELETE} from './actionType.js'
import AuthenticationService from '../../services/AuthenticationService.js'

export const getTicket=()=>async (dispatch) => {
    try{
        const {data}=await AuthenticationService.getTicket();
        dispatch({type:FETCH,payload:{data}})
    }catch(error){
        console.log(error);
    }
};

export const createTicket=(Uname,CreatedDate,Email,desc)=> async (dispatch)=>{
    try{
        const {data}=await AuthenticationService.addTicket(Uname,CreatedDate,Email,desc);
        dispatch({ type: CREATE, payload: data });
    }catch(error){
        console.log(error)
    }
};


export const updateTicket = (_id,UpdateDate,desc) => async (dispatch) => {
    
    try {
      const { data } = await AuthenticationService.updateTicket(_id,UpdateDate,desc);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
};

export const deletTicket = (_id,DeleteDate,isDelete) => async (dispatch) => {
    try {
      const { data } = await AuthenticationService.delTicket(_id,DeleteDate,isDelete);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
};



