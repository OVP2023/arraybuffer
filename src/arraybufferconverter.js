class ArrayBufferConverter {
    constructor(lengthArray) {   
        this.lengthArray = lengthArray       
        this.newBuffer = new ArrayBuffer(this.lengthArray) //создаем новый ArrayBuffer c длиной входного buffer
        this.newBufferView = new Uint16Array(this.newBuffer) //делаем представление newBuffer
    }
    load(buffer){
        this.bufferView = new Uint16Array(buffer)  //делаем новое представление buffer
        for (let i = 0; i < this.lengthArray; i++) {
            this.newBufferView[i] = this.bufferView[i]
        }
    }
    toString(){
        let str = ''
        for (let i = 0; i < this.lengthArray; i++) {
            str = str + String.fromCharCode(this.newBufferView[i])
        }
        return str
    }
}

module.exports = ArrayBufferConverter
    