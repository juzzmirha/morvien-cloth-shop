import {
  ProductState,
  ProductActionTypes,
  ProductAction,
} from "@/types/productData";

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  page: 1,
  limit: 10,
  error: null,
  loading: false,
};

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case ProductActionTypes.FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        loading: false,
        selectedProduct: action.payload,
      };

    case ProductActionTypes.FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ProductActionTypes.SET_PRODUCT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
