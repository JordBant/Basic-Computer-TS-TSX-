import { useState, Dispatch, FC } from 'react'
import { Bit } from '../classes/Bit.class';

type BitwiseOpsListProps = {
    thisBit: Bit //Bit in UI
}

type BitwiseOpButtonProps = {
    clickedStateSetter: <Dispatch>() => void;
    clicked: string
    icon: "&&" | "||" | "!!" | "XOR";
}

const BitwiseOps: FC<BitwiseOpsListProps> = ({thisBit}) => {
    const [opClicked, setOpClicked] = useState<null | string>(null);

    /**
     * 
     * Button clicked will pass its value back up to state. Depending on state,
     * this parent will trigger UI of clicked button
     * Input can either already exist (Impact to perform),
     * or can be conditionally rendered (More CSS for working around animation of an )
     *
     */

  return (
    <ul className="bitwise-ops">
        <li>
            <button className="bitwise-op-btn">
                &&
            </button>
            <input type="number" className='bitwise-op-input'/>
        </li>
        <li>
            <button className="bitwise-op-btn">
                ||
            </button>
        </li>
        <li>
            <button className="bitwise-op-btn">
                !!
            </button>
        </li>
        <li>
            <button className="bitwise-op-btn">
                XOR
            </button>
        </li>
    </ul>
  )
}

export default BitwiseOps