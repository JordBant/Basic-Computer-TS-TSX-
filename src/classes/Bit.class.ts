import { IBit } from "../interfaces/IBit";

export class Bit implements IBit{
    #value = false
    constructor(){}
    
    set(value: boolean){ 
        return this.#value = value 
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

    // and<Bit>(otherBit: Bit){
    //     let result = new Bit()

    //     const temp = this.#value
    //     const other = otherBit.getValue()

    //     if(!temp) result.clearBit()
    //     if(!other) result.clearBit()

    //     return result.setBit()
    // };

    // or<Bit>(otherBit: Bit){
    //     let result = new Bit()

    //     const temp = this.#value
    //     const other = otherBit.getValue()

    //     if(!temp){
    //         if(!other) result.clearBit()
    //     }
    //     return result.setBit()
    // };

    // xor<Bit>(otherBit: Bit){
    //     let result = new Bit()

    //     const temp = this.#value
    //     const other = otherBit.getValue()

    //     if(temp === other) return result.clearBit()
    //     return result.setBit()
    // };

    // not(){
    //     return new Bit().toggle()
    // };
}