import { createSelector } from '@reduxjs/toolkit'
import { selectDefaultAccountKey } from './accountsSelector'

export const selectDocumentsState = (state) => state.documents

export const selectDocumentsList = createSelector(
  [selectDocumentsState, selectDefaultAccountKey],
  (documents, defaultAccountKey) => {
    const accountDocs = documents.data.find(({ account_key }) => account_key === defaultAccountKey)
    return accountDocs ? accountDocs.docs : []
  }
)

export const selectDocumentsReqStatus = createSelector(
  selectDocumentsState,
  (documents) => documents.status
)

export const selectDocumentsError = createSelector(
  selectDocumentsState,
  (documents) => documents.error
)
