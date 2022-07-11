import React from 'react'

const Payment = () => {
  return (
    <div>
   
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
              <option value="full" selected>Pay Full Balance</option>
              <option value="partial">Pay Partial Balance</option>
              <option value="plan">Set-up Payment Plan</option>
            </select>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="0.00"
                value="4321.09"
              />
              
              <label for="floatingInput">Payment Amount</label>
            </div>
            <button class="btn btn-primary btn-lg">Submit Payment</button>
           </div>
  
  )
}

export default Payment