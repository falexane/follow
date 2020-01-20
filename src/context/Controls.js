import React from 'react';
import DepositButton from './DepositButton';
import WithdrawButton from './WithdrawButton';

function Controls() {
  return (
    <div className="buttons-container">
      <DepositButton />
      <WithdrawButton />
    </div>
  )
}

export default Controls;
