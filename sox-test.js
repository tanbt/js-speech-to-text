const recorder = require('node-record-lpcm16')
const fs = require('fs')
 
const file = fs.createWriteStream('test.wav', { encoding: 'binary' })
 
recorder.record({
  sampleRate: 44100
})
.stream()
.on('error', console.error)
.pipe(file)
