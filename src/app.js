const ArrayBufferConverter = require('./arraybufferconverter.js')
const getBuffer = require('./getbuffer.js')

const converter = new ArrayBufferConverter(getBuffer().byteLength)
converter.load(getBuffer())

console.log(converter.toString())









