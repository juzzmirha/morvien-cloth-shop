import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductAction, ProductActionTypes } from "@/types/productData";

export const FetchProduct = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCT });
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      });
      console.log("Data", response.data);
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_ERROR,
        payload: "Error fetching Product",
      });
    }
  };
};

export const FetchProductById = (id: number) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCT });

      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log("Data", response.data);
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCT_ERROR,
        payload: "Error fetching Product",
      });
    }
  };
};
