import {
  MicrophoneIcon,
  SpeakerWaveIcon,
  PaperAirplaneIcon,
  StopIcon,
} from '@heroicons/react/24/solid';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Fragment, useState } from 'react';
import Proptype from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';

const Question = ({ index, q }) => {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();
  const arabicNumbers = ['١', '٢', '٣', '٤', '٥'];

  const [selected, setSelected] = useState(null);

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
                selected === i
                  ? option.isCorrect
                    ? 'text-green-500'
                    : 'text-red-500'
                  : ''
              )}
              onClick={() => {
                setSelected(i);
                console.log('selected', i, option.isCorrect);
              }}
            >
              {option.text}
            </li>
          ))}
        </ol>
        <div className='flex gap-4'>
          <button
            className={clsx(
              'flex gap-1 items-center py-1 px-4 rounded-md text-white',
              isRecording ? 'bg-red-500' : 'bg-blue-600'
            )}
            onClick={isRecording ? stopRecording : startRecording}
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
          <button className='flex gap-2 items-center bg-gray-500 py-1 px-4 rounded-md text-white'>
            <SpeakerWaveIcon width={15} className='-scale-x-100' />
            الإستماع للتسجيل
          </button>
          <button className='flex gap-2 items-center bg-green-600 py-1 px-4 rounded-md text-white '>
            إرسال الإجابة
            <PaperAirplaneIcon width={15} className='-scale-x-100' />
          </button>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

Question.propTypes = {
  index: Proptype.number.isRequired,
  q: Proptype.object.isRequired,
};

export default Question;
