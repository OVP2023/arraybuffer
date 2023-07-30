test('ArrayBuffer class', () => {
    
    const ArrayBufferConverter = require('../arraybufferconverter.js')
    const getBuffer = require('../getbuffer.js')

    const converter = new ArrayBufferConverter(getBuffer().byteLength)
    converter.load(getBuffer())
    const received = converter.toString()
    
    expect(received).toMatch(/{"data":{"user":{"id":1,"name":"Hitman","level":10}}}/)
});