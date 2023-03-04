import { IBit } from "../interfaces/IBit";

export class Bit implements IBit{
    #value = false
    constructor(){}
    
    set(value: boolean){ 
        this.#value = value 
    };

    toggle(){
        !this.#value
    };
    
    setBit(){
        this.#value = true
    };

    clearBit(){
        this.#value = false
    };

    getValue(){
        return this.#value
    };

    and(otherBit: Bit): Bit{
        let result = new Bit()

        const temp = this.#value
        const other = otherBit.getValue()

        if(temp === false) result.clearBit()
        if(other === false) {
            result.clearBit()
        } else {
            result.setBit()
        }
        return result
    };

    or(otherBit: Bit): Bit{
        let result = new Bit()

        const temp = this.#value
        const other = otherBit.getValue()

        if(temp === false){
            if(other === false) result.clearBit()
        } else {
            result.setBit()
        }
        return result
    };

    xor(otherBit: Bit): Bit{
        let result = new Bit()

        const temp = this.#value
        const other = otherBit.getValue()

        temp === other 
        ? result.clearBit() 
        : result.setBit()

        return result
    };

    not(){
        let result = new Bit()
        result.toggle()
        return result
    };
}