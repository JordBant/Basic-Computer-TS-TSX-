import {useCallback} from 'react'
import { Bit } from '../classes/Bit.class'

type BitwiseOpButtonProps = {
  icon: string;
  bitwiseOp: () => {};

}

const BitwiseOpButton = (props: BitwiseOpButtonProps) => {
    const performBitwiseOp = useCallback(
      (other: Bit) => {
        return other
      },
      [],
    )
    
  return (
    <>
      <button className="bitwise-op-btn">
        {props.icon}
      </button>

      {/* Any number entered will be converted to a byte */}
      <input type="number" name="bit" />
    </>
  )
}

export default BitwiseOpButton