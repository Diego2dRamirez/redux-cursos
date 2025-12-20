import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';
import { Button } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import { Flex } from 'antd';

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('3');

  return (
    <section style={stylesSection}>
      <h2>Counter: <i>{count}</i></h2>

      <Flex gap='large'>
        <Button color='primary' variant='solid' size='middle' onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button color='gold' disabled={count == 0} variant='solid' size='middle' onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button color='danger' variant='solid' size='middle' onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </Flex>


      <Flex vertical gap='middle' style={{ width: "30%" }}>
        <Input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <Button color='geekblue' variant='solid' onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Incremen by {incrementAmount}</Button>
      </Flex>
    </section>
  )
}


export { Counter };

const stylesSection = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}