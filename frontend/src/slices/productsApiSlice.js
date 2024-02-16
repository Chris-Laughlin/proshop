import { PRODUCTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5,
            providesTags: ["Products"],
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: "POST",
                credentials: 'include',
            }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data._id}`,
                method: "PUT",
                body: data,
                credentials: 'include',
            }),
            invalidatesTags: ["Products"],
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOADS_URL}`,
                method: "POST",
                body: data,
                credentials: 'include',
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation,
            useUpdateProductMutation, useUploadProductImageMutation } = productsApiSlice;