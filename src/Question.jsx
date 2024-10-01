import {
  MicrophoneIcon,
  SpeakerWaveIcon,
  PaperAirplaneIcon,
  StopIcon,
} from '@heroicons/react/24/solid';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Fragment, useEffect, useState } from 'react';
import Proptype from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { remove_tashkeel } from './utils';

const Question = ({ index, q }) => {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();

  const playAudio = () => {
    const audio = document.getElementById('audio' + index);
    if (audio.src && audio.src !== '') {
      audio.play();
    }
  };

  const arabicNumbers = ['١', '٢', '٣', '٤', '٥'];
  const query = async (file) => {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/tarteel-ai/whisper-base-ar-quran',
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
          'Content-Type': 'audio/flac',
        },
        method: 'POST',
        body: file,
      }
    );
    const result = await response.json();
    return result;
  };

  const [selected, setSelected] = useState(null);
  const [audio, setAudio] = useState(null);
  const [heard, setHeard] = useState(null);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const addAudioElement = (blob) => {
      const url = URL.createObjectURL(blob);
      const audio = document.getElementById('audio' + index);
      audio.src = url;
      audio.controls = true;
    };
    if (recordingBlob && audio === null) {
      addAudioElement(recordingBlob);
      setAudio(recordingBlob);
      query(recordingBlob).then((response) => {
        console.log(response, remove_tashkeel(response.text));
        setHeard(remove_tashkeel(response.text));
        q.options.map((option, i) => {
          console.log('selected', remove_tashkeel(option.text));
          if (remove_tashkeel(option.text) === remove_tashkeel(response.text)) {
            setSelected(i);
          }
        });
      });
    }
  }, [audio, index, q.options, recordingBlob]);

  return (
    <Fragment key={index}>
      <div className='space-y-3'>
        {q.title}
        <p>
          <span lang='ar'>{arabicNumbers[index]}</span>- {q.question}
        </p>

        <ol className='flex gap-2 list-[arabic-indic] list-inside'>
          {q.options.map((option, i) => (
            <li
              key={i}
              className={clsx(
                'cursor-pointer px-4 py-1 rounded-md hover:underline underline-offset-4',
                selected === i ? 'underline' : '',
                showAnswer && option.isCorrect
                  ? 'text-green-500'
                  : showAnswer && selected === i
                  ? 'text-red-500'
                  : ''
              )}
              onClick={() => {
                setSelected(i);
              }}
            >
              {option.text}
            </li>
          ))}
        </ol>
        {heard && (
          <p>
            <span className='font-bold'>سمعت:</span> {heard}{' '}
            {q.options
              .map((option) => remove_tashkeel(option.text))
              .includes(heard) ? null : (
              <span className='text-red-500'>
                - الجواب غير موجود، اعد المحاولة
              </span>
            )}
          </p>
        )}
        <div className='flex gap-4'>
          <button
            disabled={showAnswer}
            className={clsx(
              'flex gap-1 items-center py-2 px-4 rounded-md text-white disabled:bg-gray-300 disabled:cursor-not-allowed',
              isRecording ? 'bg-red-500' : 'bg-blue-600'
            )}
            onClick={() => {
              if (isRecording) {
                setAudio(null);
                stopRecording();
              } else startRecording();
            }}
          >
            {' '}
            {isRecording ? (
              <StopIcon width={15} />
            ) : (
              <MicrophoneIcon width={15} />
            )}
            {isRecording ? 'توقف' : isPaused ? 'إستمرار' : 'بدء التسجيل'}
            {isRecording && (
              <span>{moment.utc(recordingTime * 1000).format('mm:ss')}</span>
            )}
          </button>
          <button
            disabled={!recordingBlob || showAnswer}
            className='flex gap-2 items-center bg-gray-500 py-1 px-4 rounded-md text-white disabled:bg-gray-300 disabled:cursor-not-allowed'
            onClick={playAudio}
          >
            <SpeakerWaveIcon width={15} className='-scale-x-100' />
            الإستماع للتسجيل
          </button>
          <audio id={'audio' + index} className='hidden' />
          <button
            className='flex gap-2 items-center bg-green-600 py-1 px-4 rounded-md text-white disabled:bg-gray-300 disabled:cursor-not-allowed'
            onClick={() => {
              setShowAnswer(true);
            }}
            disabled={showAnswer || selected === null}
          >
            إرسال الإجابة
            <PaperAirplaneIcon width={15} className='-scale-x-100' />
          </button>
        </div>
        {showAnswer && (
          <p> النتيجة: {q.options[selected]?.isCorrect ? '١' : '٠'}/١</p>
        )}
      </div>
      <hr />
    </Fragment>
  );
};

Question.propTypes = {
  index: Proptype.number.isRequired,
  q: Proptype.object.isRequired,
  onAnswer: Proptype.func.isRequired,
};

export default Question;
