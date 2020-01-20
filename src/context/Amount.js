import React, {useContext} from 'react'
import { AppContext } from './AppContext'

const Amount = () => {
  const {amount} = useContext(AppContext)

  return (
    <>
      <p className="you-have-saved">You have saved:</p>
      <div className="amount-wrapper">
        <div className="amount-container">
          <div className="money-icon">$</div>
          <div className="amount">{amount}</div>
        </div>
      </div>
    </>
  )
}

export default Amount
