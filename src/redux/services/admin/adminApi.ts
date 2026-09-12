import { baseApi } from "../baseApi";
import type { User } from "@/types/user";
import type { ListParams } from "@/types/common";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminUsers: builder.query<User[], ListParams>({
      query: (params) => ({
        url: "/admin/users",
        params,
      }),
      providesTags: (_result, _error, _arg) => [{ type: "Admin" }],
    }),
    getAdminSettings: builder.query<Record<string, unknown>, void>({
      query: () => "/admin/settings",
      providesTags: (_result, _error, _arg) => [{ type: "Admin" }],
    }),
    updateAdminSettings: builder.mutation<Record<string, unknown>, Record<string, unknown>>({
      query: (data) => ({
        url: "/admin/settings",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, _arg) => [{ type: "Admin" }],
    }),
  }),
});

export const {
  useGetAdminUsersQuery,
  useGetAdminSettingsQuery,
  useUpdateAdminSettingsMutation,
} = adminApi;
