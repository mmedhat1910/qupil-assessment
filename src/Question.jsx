import {
  MicrophoneIcon,
  SpeakerWaveIcon,
  PaperAirplaneIcon,
  StopIcon,
} from '@heroicons/react/24/solid';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Fragment } from 'react';
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
  return (
    <Fragment key={index}>
      <div className='space-y-3'>
        {q.title}
        <p>
          {index} - {q.question}
        </p>
        <ul className='list-inside list-["-"]'>
          {q.options.map((option, index) => (
            <li key={index} className='cursor-pointer'>
              {option.text}
            </li>
          ))}
        </ul>
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
