export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum ProductActionTypes {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR",
  FETCH_PRODUCT_BY_ID = "FETCH_PRODUCT_BY_ID",
  SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccesAction {
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
  payload: any[];
}

interface FetchProductGetById {
  type: ProductActionTypes.FETCH_PRODUCT_BY_ID;
  payload: Product;
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
  | FetchProductGetById
  | FetchProductErrorAction
  | SetProductPage;
