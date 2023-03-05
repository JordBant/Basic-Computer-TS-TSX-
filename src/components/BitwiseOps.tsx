import React from 'react'

type Props = {}

const BitwiseOps = (props: Props) => {
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