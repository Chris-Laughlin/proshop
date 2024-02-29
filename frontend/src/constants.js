export const PROXY = "http://localhost:5000";
export const PRODUCTS_URL = PROXY + "/api/products";
export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : PROXY;
export const USERS_URL = PROXY +'/api/users';
export const ORDERS_URL = PROXY +'/api/orders';
export const PAYPAL_URL = PROXY +'/api/config/paypal';
export const UPLOADS_URL = PROXY +'/api/upload';