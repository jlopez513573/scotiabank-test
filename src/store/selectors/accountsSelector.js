import { createSelector } from '@reduxjs/toolkit'

export const selectAccountsState = (state) => state.accounts

export const selectAccountsList = createSelector(
  selectAccountsState,
  (accounts) => accounts.data
)

export const selectDefaultAccountKey = createSelector(
  selectAccountsState,
  (accounts) => accounts.defaultAccountKey
)

export const selectDefaultAccount = createSelector(
  [selectAccountsList, selectDefaultAccountKey],
  (accounts, defaultAccountKey) => accounts.find(({ key }) => defaultAccountKey === key)
)

export const selectAccountsReqStatus = createSelector(
  selectAccountsState,
  (accounts) => accounts.status
)

export const selectAccountsError = createSelector(
  selectAccountsState,
  (accounts) => accounts.error
)
