import { createSelector } from '@reduxjs/toolkit'

export const selectMessageState = (state) => state.message

export const selectMessageValue = createSelector(
  selectMessageState,
  (message) => message.msg
)

export const selectMessageShowValue = createSelector(
  selectMessageState,
  (message) => message.show
)

export const selectMessageSeverityValue = createSelector(
  selectMessageState,
  (message) => message.severity
)
