import React from "react";
import { Alert, Snackbar } from '@mui/material'
import Slide from '@mui/material/Slide'
import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectMessageSeverityValue, selectMessageShowValue, selectMessageValue } from '../store/selectors/messageSelector'
import { hideAlert } from '../store/slices/messageSlice'

const SlideTransition = (props) => <Slide {...props} direction="up" />

const Message = () => {
  const dispatch = useAppDispatch()

  const show = useAppSelector(selectMessageShowValue)
  const message = useAppSelector(selectMessageValue)
  const severity = useAppSelector(selectMessageSeverityValue)

  const handleClose = useCallback(() => {
    dispatch(hideAlert())
  }, [dispatch])

  return (
    <Snackbar TransitionComponent={SlideTransition} open={show} autoHideDuration={6000} onClose={handleClose}>
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Message
