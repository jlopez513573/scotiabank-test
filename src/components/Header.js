import React from 'react'
import { useAppSelector } from '../store/hooks'
import { selectDefaultAccount } from '../store/selectors/accountsSelector'

const Header = () => {
  const defaultAccount = useAppSelector(selectDefaultAccount)
  return (
    <header className="App-header">
      <h1 className="App-title">
        {defaultAccount ?  defaultAccount.description : "No Account selected..."}
      </h1>
    </header>
  )
}

export default Header;