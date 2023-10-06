import React from "react";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import { selectAccountsList } from "../store/selectors/accountsSelector";
import { setDefaultAccountKey } from "../store/slices/accountsSlice";

const AccountsSelect = () => {
  const dispatch = useAppDispatch()
  const accounts = useAppSelector(selectAccountsList);

  const handleChange = (event) => {
    dispatch(setDefaultAccountKey(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <NativeSelect
        onChange={handleChange}
        inputProps={{
          name: 'accounts',
          id: 'uncontrolled-native',
        }}
      >
        {accounts.map(({ id, key, description, typeDesc }) => (
          <option key={key} value={key}>{ `${description} ${id} ${typeDesc}` }</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default AccountsSelect