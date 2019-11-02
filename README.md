# Play around with speech recognization

## Run
`npm start`

## Run Google cloud Speech API
on Windows `Terminal` (recommended)
```
set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\tanwin\speech-to-text-project-be5bc4f20254.json
echo %GOOGLE_APPLICATION_CREDENTIALS%
set DEBUG=record
node index.js
```
to see the translated text of `resources/audio.raw` file.



#### Translate from microphone

Make sure `sox` can record via microphone.

`node microphone.js` then speak.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
* https://github.com/mdn/web-speech-api


## References Streaming to Google cloud services
* https://medium.com/ideas-at-igenius/delivering-a-smooth-cross-browser-speech-to-text-experience-b1e1f1f194a2
* https://cloud.google.com/speech-to-text/docs/streaming-recognize

## Configure Google cloud Speech
* https://github.com/googleapis/nodejs-speech#using-the-client-library

## Setup SOX

http://sox.sourceforge.net/

Test: `node sox-test.js` then open the file `test.wav` to here the record.