import { FC, useState, useCallback } from 'react'
import './App.css'
import { Bit } from './classes/Bit.class'

const App: FC = () => {
  const bit = new Bit()
  bit.set(true);

  const [bitState, setBitState] = useState<Bit>(bit)

  const handleBitUI = useCallback(
    () => {
      const bitUI = bitState.getValue() === true ? '1' : '0'
      return bitUI
    },
    [bitState],
  )
  

  // const handleBitUI = (bit: Bit): string => {
  //   const bitUI = bit.getValue() === true ? '1' : '0'
  //   return bitUI
  // }
  
  const handleBitUISet = (): void => {
    // read value emitted from somewhere and reset
    // Could be memoized since we will only be dealing with so many value
    // setBitState(/* Some emitted boolean value */)
  }

  return (
    <div className="App">
      {/* One Bit */}
      <h1 className="bit-display">
        { handleBitUI() }
      </h1>
    </div>
  )
}

export default App
