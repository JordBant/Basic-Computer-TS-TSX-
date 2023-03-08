import {useCallback, FC} from 'react'
import { Bit } from '../classes/Bit.class'

type BitwiseOpButtonProps = {
  clickedStateSetter: <Dispatch>() => void;
  clicked: string
  icon: "&&" | "||" | "!!" | "XOR";
}

const BitwiseOpButton: FC<BitwiseOpButtonProps> = ({icon, clicked, clickedStateSetter}) => {
  return (
    <>
      <button 
        className="bitwise-op-btn"
        onClick={() => clickedStateSetter}
      >
        {icon}  {/* Temporary Icon */}
      </button>

      {/* Any number entered will be converted to a byte */}
      
      <div className={`input-wrapper ${clicked}`}>
        <input type="number" name="bit" />
        <button
          onClick={}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default BitwiseOpButton