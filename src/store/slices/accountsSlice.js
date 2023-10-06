import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  status: "IDLE",
  error: null,
  defaultAccountKey: "NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",
  data: []
}

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("rejected error message");
      resolve([
        {
          id: '11112345',
          key: 'NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=',
          description: 'Company A',
          type: '1',
          typeDesc: 'TFSA',
          currencyCode: null
        }, {
          id: '11112346',
          key: 'S2KYccuaQwcv_ThMlFRRNXc1wAEecPHMu7O8kB_Phcw=',
          description: 'Company B',
          type: '2',
          typeDesc: 'Margin',
          currencyCode: null
        }, {
          id: '11112347',
          key: 'LiKvx-bfXeb8os2P4fjUMIfQgeZTeYzMDNCqqSxp904=',
          description: 'Company C',
          type: '1',
          typeDesc: 'RRSP',
          currencyCode: null
        }, {
          id: '11111T',
          key: '_ew_Muidp2ai62bo45_QGnU2mGKn66D_ocAZepW_CaM=',
          description: 'Company D - IMA',
          type: '1',
          typeDesc: 'IMA',
          currencyCode: null
        }, {
          id: '11112348',
          key: 'ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=',
          description: 'Company E',
          type: '1',
          typeDesc: '',
          currencyCode: null
        }
      ])
    }, 1000);
  })
}

export const fetchAccounts = createAsyncThunk(
  'accounts/fetchAccounts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData();
      return response
    } catch (error) {
      return rejectWithValue(error);
      /* code for axios
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
      */
    }
  }
)

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setDefaultAccountKey: (state, action) => {
      state.defaultAccountKey = action.payload
      return state
    },
    clearDefaultAccountKey: (state, action) => {
      state.defaultAccountKey = ""
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.status = "PENDING"
        return state
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.status = "SUCCEDED"
        state.data = action.payload
        return state
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = "FAILED"
        state.error = action.payload
        return state
      })
  }
});

const { reducer, actions } = accountsSlice;
export const { setDefaultAccountKey, clearDefaultAccountKey } = actions
export default reducer;
