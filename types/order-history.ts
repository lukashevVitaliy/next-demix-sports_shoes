export interface OrderHistory {
  _id: string;
  user: string;
  ordersItems: {
    _id: string;
    images: string[];
    name: string;
    nameColor: string;
    activeSizes: number;
    quantity: number;
    priceNew: number;
    priceOld: number;
    gender: string;
    currency: string;
    slug: string;
  }[];
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt: string;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
}
[];

export const ActionTypes = {
  FETCH_REQUEST: 'FETCH_REQUEST' as const,
  FETCH_SUCCESS: 'FETCH_SUCCESS' as const,
  FETCH_FAIL: 'FETCH_FAIL' as const,
};
// ===== Interface Store =====
export interface State {
  loading: boolean;
  orders: OrderHistory[];
  error: string | null;
}

// ===== Interface Actions =====
interface FetchRequest {
  type: typeof ActionTypes.FETCH_REQUEST;
}
interface FetchSuccess {
  type: typeof ActionTypes.FETCH_SUCCESS;
  payload: OrderHistory[];
}
interface FetchFail {
  type: typeof ActionTypes.FETCH_FAIL;
  payload: string;
}

export type Action = FetchRequest | FetchSuccess | FetchFail;
