import { publicRequest, userRequest } from "../../requestMethods";


export const getProductById=async(id)=>{
    try {
        const res=await userRequest.get(`product/getProductById/${id}`);
        return res.data;
    } catch (error) {
        return error
    }
}


export const validateCoupon=async(code)=>{
    try {
        const res=await userRequest.get(`coupon/validateCoupon/${code}`);
        return res.data;
    } catch (error) {
        return error
    }
}

export const getOrderHistory=async()=>{
    try {
        const res=await userRequest.get("order/getOrderHistory");
        return res.data
    } catch (error) {
        return error
    }
}

// export const resetPassword=async(data)=>{
//     console.log("i am also clicked bro");
//     try {
//     const res=await userRequest.get("auth/resetPassword",{password: data.password, confirmPassword: data.confirmPassword});
//         console.log(res);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }

export const getCategoryList=async()=>{
    try {
        const res=await userRequest.get("/collection/getAllCollections");
        // console.log("response",res.data.collections);
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }
    
}

export const getProductsByCategory=async(id)=>{
    try {
        const res=await publicRequest.get(`/product/getProductsByCategory/${id}`);
        return res.data
    } catch (error) {
        return error;
    }
}