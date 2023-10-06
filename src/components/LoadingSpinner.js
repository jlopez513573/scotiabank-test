import React from "react";
import { Backdrop, CircularProgress } from '@mui/material'

import { useAppSelector } from '../store/hooks'
import { selectLoaderValue } from '../store/selectors/loaderSelector'

const LoadingSpinner = () => {
  const show = useAppSelector(selectLoaderValue)

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingSpinner
