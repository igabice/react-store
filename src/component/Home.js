import React from 'react'
import { CartState } from '../context/Context';

const Home = () => {

    const { state, dispatch } = CartState();

    console.log(state, dispatch);

  return <div>Home</div>;
  
}

export default Home