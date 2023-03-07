import {useCallback, FC} from 'react'
import { Bit } from '../classes/Bit.class'

type BitwiseOpButtonProps = {
  icon: "XOR" | "||" | "&&" | "!!";
  bitwiseOp: () => {};
}

const BitwiseOpButton: FC<BitwiseOpButtonProps> = ({bitwiseOp, icon}) => {
    const triggerByteInput = useCallback(() => {
        
      },
      [],
    )
    
  return (
    <>
      <button 
        className="bitwise-op-btn"
        onClick={triggerByteInput}
      >
        {icon}  {/* Temporary Icon */}
      </button>

      {/* Any number entered will be converted to a byte */}
      <div className="input-wrapper">
        <input type="number" name="bit" />
        <button
          onClick={bitwiseOp}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default BitwiseOpButton