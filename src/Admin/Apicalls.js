import { userRequest, productRequest} from "../requestMethods";
// import axios from "axios";


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

export const createaProduct=async(formData)=>{
    try {
        const res=await productRequest.post("product/addProduct", formData);
        return res.data
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const createCategory=async(name)=>{
    try {
        const res=await userRequest.post("collection/createCollection", name);
        // console.log(res);
        return res.data;
    } catch (error) {
        return error
    }
}

export const createCoupon=async(formData)=>{
    try {
        const res=await userRequest.post("coupon/createCoupon", formData);
        // console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteCategory=async(id)=>{
    try {
        const res=await userRequest.delete(`collection/deleteCollection/${id}`);
        // console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getCoupons=async()=>{
    try {
        const res=await userRequest.get("coupon/getAllCoupon");
        // console.log("coupon",res);
        return res.data
    } catch (error) {
        return error;
    }
}

export const deleteCoupon=async(id)=>{
    try {
        const res=await userRequest.delete(`coupon/deleteCoupon/${id}`);
        // console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getProductList=async()=>{
    try {
        const res=await userRequest.get("product/getAllProducts")
        console.log(res);
        return res.data
    } catch (error) {
        return error
    }
}