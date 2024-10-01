import { useEffect } from 'react';
import VoiceToText from 'voice2text';

const ExampleComponent = () => {
  const voice2text = new VoiceToText({
    converter: 'vosk',
    language: 'ar', // The language of the speech
    source: 'mic', // The source of the audio
  });

  useEffect(() => {
    let textarea = document.querySelector('#textarea');

    window.addEventListener('voice', (e) => {
      if (e.detail.type === 'PARTIAL') {
        console.log('partial result: ', e.detail.text);
        textarea.value =
          textarea.value.replace(/~.*?~/g, '') + `~${e.detail.text}~`;
      } else if (e.detail.type === 'FINAL') {
        console.log('final result: ', e.detail.text);
        textarea.value =
          textarea.value.replace(/~.*?~/g, '') + ' ' + e.detail.text;
      } else if (e.detail.type === 'STATUS') {
        console.log('status: ', e.detail.text);
      }
    });
  }, []);

  return (
    <div className='mx-auto w-fit flex flex-col'>
      <p className='text-center'>{voice2text.converter.status}</p>
      <button onClick={() => voice2text.start()}>Start</button>
      <button onClick={() => voice2text.stop()}>Stop</button>

      <textarea name='' id='textarea' rows='10' cols='110'></textarea>
    </div>
  );
};

export default ExampleComponent;
