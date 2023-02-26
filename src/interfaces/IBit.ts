import { Bit } from "../classes/Bit.class"

export interface IBit{
    set: (value: boolean) => void
    toggle: () => void
    setBit: ()  => void
    clearBit: ()  => void
    getValue: () => boolean
    and: <Bit>(otherBit: Bit) => Bit
    or: <Bit>(otherBit: Bit) => Bit
    xor: <Bit>(otherBit: Bit) => Bit
    not: () => Bit
    toString: () => string
}

// public interface IBit {
//     void set(int value); // sets the value of the bit
//     void toggle(); // changes the value from 0 to 1 or 1 to 0
//     void set(); // sets the bit to 1
//     void clear(); // sets the bit to 0
//     int getValue(); // returns the current value
//     bit and(bit other); // performs and on two bits and returns a new bit set to the result
//     bit or(bit other); // performs or on two bits and returns a new bit set to the result
//     bit xor(bit other); // performs xor on two bits and returns a new bit set to the result
//     bit not(); // performs not on the existing bit, returning the result as a new bit
//     @Override
//      String toString(); // returns “0” or “1”
//     }
    