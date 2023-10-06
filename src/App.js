import React, { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../static/css/App.css'
import { useAppDispatch } from './store/hooks'
import LoadingSpinner from './components/LoadingSpinner'
import Message from './components/Message'
import { fetchAccounts } from './store/slices/accountsSlice';
import { hideSpinner, showSpinner } from './store/slices/loaderSlice'
import { showWarning } from './store/slices/messageSlice'
import Header from './components/Header'
import AccountsSelect from './components/AccountsSelect'
import DocumentsTable from './components/DocumentsTable'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(showSpinner())
    dispatch(fetchAccounts())
      .unwrap()
      .then(() => { dispatch(hideSpinner()) })
      .catch((error) => {
        dispatch(hideSpinner())
        dispatch(showWarning(error))
      })
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Header />
        <Box mt={5} mb={5}>
          <AccountsSelect />
        </Box>
        <Box>
          <DocumentsTable />
        </Box>
      </Container>
      <Message />
      <LoadingSpinner />
    </div>
  )
}

export default App;