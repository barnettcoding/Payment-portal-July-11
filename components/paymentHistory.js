import React from 'react'

const PaymentHistory = () => {
  return (
    <div>
        <h4 class="d-flex justify-content-left items-center">
    <span>Payment History</span>
    
  </h4>

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Account</th>
        <th scope="col">Date Posted</th>
        <th scope="col">Payment Amount</th>
        <th scope="col">Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <td >27754100</td>
        <td >01/07/2020</td>
        <td >$105.54</td>
        <td >$473.82</td>
        </tr>
      <tr >
        <td >27754100</td>
        <td >12/10/2019</td>
        <td >$99.85</td>
        <td >$507.84</td>
        </tr>
      <tr >
        <td >28081878</td>
        <td >11/01/2019</td>
        <td >$231.14</td>
        <td >$706.19</td>
        </tr>
      <tr >
        <td >2829115</td>
        <td >10/03/2019</td>
        <td >$77.89</td>
        <td >$784.02</td>
        </tr>
        </tbody>
        </table>
    </div>
    
</div>
  )
}

export default PaymentHistory