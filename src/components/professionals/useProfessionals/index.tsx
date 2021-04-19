import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionals } from '../../../flux/actions/professional.action'

export const useProfessionals = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const state: any = useSelector((state) => state)
  const professionalsStorage = state.professionalsReducer

  useEffect(() => {
    dispatch(getProfessionals())
  }, [])

  const handleClick = () => {
    setOpen(!open)
  }

  return {
    ...professionalsStorage,
    open,
    setOpen,
    handleClick
  }
}
