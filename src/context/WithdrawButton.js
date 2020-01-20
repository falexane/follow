import React, {useContext} from 'react'
import { AppContext } from './AppContext'

const WithdrawButton = () => {
  const {withdraw} = useContext(AppContext)

  return (
    <button className="button" type="button" onClick={() => withdraw(10)}>
      Withdraw
    </button>
  )
}

export default WithdrawButton;
