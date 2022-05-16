import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export const extendedApiSliceUser = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
      transformResponse: responseData => {
        return usersAdapter.setAll(initialState, responseData)
      },
      providesTags: (result, error, arg) => [
        { type: 'User', id: 'LIST' },
        ...result.ids.map(id => ({ type: 'User', id }))
      ]
    })
  })
})

export const {
  useGetUsersQuery
} = extendedApiSliceUser

// Selectors

export const selectUsersResult = extendedApiSliceUser.endpoints.getUsers.select()

const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => {
    return usersResult.data
  }
)

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)