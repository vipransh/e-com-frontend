import { loginFailure, loginSuccess, loginStart } from "./userRedux";
import { publicRequest } from "../requestMethods";




export const login=async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        // const data=JSON.stringify(user);
        console.log(user);
        const res=await publicRequest.post("/auth/login",user);
        // const res=await publicRequest.get("/product/getAllProducts");
        console.log(res);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}