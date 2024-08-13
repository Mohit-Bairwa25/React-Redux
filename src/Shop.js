import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
  const dispatch = useDispatch();

  /* 2nd Method */
  // const actions = bindActionCreators(actionCreators, dispatch);

  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <h2>Deposit/Withdraw Money &#8377;</h2>

      {/* 1st Method */}
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(10000))}}>-</button>
        Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(10000))}}>+</button> */}

      {/* 2nd Method */}
      {/* <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(10000)}}>-</button>
        Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(10000)}}>+</button> */}

      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(10000)}}>-</button>
        Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(10000)}}>+</button>

    </>
  )
}

export default Shop
