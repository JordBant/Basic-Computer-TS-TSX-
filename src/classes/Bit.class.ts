import { IBit } from "../interfaces/IBit";

export class Bit implements IBit{
    #value = false
    constructor(){}
    
    set(value: boolean){ 
        this.#value = value 
    };

    toggle(){
        return !this.#value
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

    and<Bit>(otherBit: Bit){
        const other = otherBit.getValue()
        const temp = this.#value
        
        let result = new Bit()
        if(!temp) temp
        if(!other) other

        return result.setBit()
    };

    // and( bit: Bit ){
    //     let newBit: Bit
    //     return newBit
    // }

}