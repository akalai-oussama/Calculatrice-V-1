class Calculatrice{
    #_a;
    #_b;
    #_operation;
    #_result;

    get a (){
        return this.#_a
    }
    set a (value){
        this.#_a = value
    }
    get b (){
        return this.#_b
    }
    set b(value){
        this.#_b = value
    }
    get operation(){
        return this.#_operation
    }
    set operation(value){
        this.#_operation = value
    }
    get result(){
        return this.#_result
    }
    set result(value){
        this.#_result = value
    }
    calculer(){
        this.#_result = undefined
        switch (this.#_result) {
            case '+':
                this.#_result = this.#_a + this.#_b
                break;
                case '-':
                    this.#_result = this.#_a - this.#_b
                    break;
            default:
                break;
        }
        return this.#_result
    }
    Init(){
        this.#_a = undefined
        this.#_b = undefined
        this.#_operation = undefined
        this.#_result = undefined
    }
}