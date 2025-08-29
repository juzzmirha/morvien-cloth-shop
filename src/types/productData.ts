export interface ProductState {
  products: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum ProductActionTypes {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR",
  SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccesAction {
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
  payload: any[];
}

interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCT_ERROR;
  payload: string;
}

interface SetProductPage {
  type: ProductActionTypes.SET_PRODUCT_PAGE;
  payload: number;
}

export type ProductAction =
  | FetchProductAction
  | FetchProductSuccesAction
  | FetchProductErrorAction
  | SetProductPage;
