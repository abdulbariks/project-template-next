import { baseApi } from "../baseApi";
import type { User } from "@/types/user";
import type { ListParams } from "@/types/common";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], ListParams>({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: (_result, _error, _arg) => [{ type: "Users" }],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: (_result, _error, _arg) => [{ type: "Users" }],
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (_result, _error, _arg) => [{ type: "Users" }],
    }),
    updateUser: builder.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, _arg) => [{ type: "Users" }],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, _arg) => [{ type: "Users" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
