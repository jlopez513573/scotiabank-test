import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  status: "IDLE",
  error: null,
  data: [
    {
      account_key: 'NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=',
      docs: [{
        document_type: 'A',
        is_paper_flag: false
      },
      {
        document_type: 'C',
        is_paper_flag: false
      }, {
        document_type: 'S',
        is_paper_flag: false
      }, {
        document_type: 'T',
        is_paper_flag: false
      }]
    }, {
      account_key: 'S2KYccuaQwcv_ThMlFRRNXc1wAEecPHMu7O8kB_Phcw=',
      docs: [{
        document_type: 'T',
        is_paper_flag: false
      },
      {
        document_type: 'A',
        is_paper_flag: false
      }, {
        document_type: 'C',
        is_paper_flag: false
      }, {
        document_type: 'S',
        is_paper_flag: false
      }]
    }, {
      account_key: 'LiKvx-bfXeb8os2P4fjUMIfQgeZTeYzMDNCqqSxp904=',
      docs: [{
        document_type: 'A',
        is_paper_flag: false
      }, {
        document_type: 'C',
        is_paper_flag: false
      }, {
      document_type: 'S',
      is_paper_flag: false
      }, {
        document_type: 'T',
        is_paper_flag: false
      }]
    }, {
      account_key: '_ew_Muidp2ai62bo45_QGnU2mGKn66D_ocAZepW_CaM=',
      docs: [{
        document_type: 'ALL',
        is_paper_flag: false
      }]
    }, {
      account_key: 'ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=',
      docs: [{
        document_type: 'ALL',
        is_paper_flag: false
      }]
    }
  ]
}

export const fetchDocuments = createAsyncThunk(
    'documents/fetchDocuments',
    async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/campaigns')
        return response.data
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.status === 404) {
            const data = error.response.data
            return data.error
          } else if (error.response && error.response.status === 422) {
            const data = error.response.data
            return data.error
          }
        }
        return 'Network error!'
      }
    }
  )

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.status = "PENDING"
        return state
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.status = "SUCCEDED"
        state.data = action.payload
        return state
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.status = "FAILED"
        state.error = action.payload
        return state
      })
  }
});

const { reducer } = documentsSlice;
export default reducer;
