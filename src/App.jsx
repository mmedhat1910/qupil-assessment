import { Fragment } from 'react';
import { MicrophoneIcon, SpeakerWaveIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import ExampleComponent from './ExampleComponent';

const App = () => {
  const questions = [
    {
      title: 'سورة البقرة',
      question:
        'وَإِذَا قِيلَ لَهُمۡ لَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ قَالُوٓاْ إِنَّمَا نَحۡنُ ------- ۞',
      options: [
        { text: 'مُفۡلِحُونَ', isCorrect: false },
        { text: 'مُصۡلِحُونَ', isCorrect: true },
        { text: 'مُسۡتَهۡزِءُونَ', isCorrect: false },
      ],
    },
    {
      title: 'سورة القصص',
      question:
        'وَأَوۡحَيۡنَآ إِلَىٰٓ أُمِّ مُوسَىٰٓ أَنۡ أَرۡضِعِيهِۖ فَإِذَا خِفۡتِ عَلَيۡهِ فَأَلۡقِيهِ فِي ------- وَلَا تَخَافِي وَلَا تَحۡزَنِيٓۖ إِنَّا رَآدُّوهُ إِلَيۡكِ وَجَاعِلُوهُ مِنَ ٱلۡمُرۡسَلِينَ ۞',
      options: [
        { text: 'ٱلۡيَمِّ', isCorrect: true },
        { text: 'ٱلنَّهۡرِ', isCorrect: false },
        { text: 'ٱلۡوَادِي', isCorrect: false },
      ],
    },
    {
      title: 'سورة لقمان',
      question:
        'يَٰبُنَيَّ أَقِمِ ----- وَأۡمُرۡ بِٱلۡمَعۡرُوفِ وَٱنۡهَ عَنِ ٱلۡمُنكَرِ وَٱصۡبِرۡ عَلَىٰ مَآ أَصَابَكَۖ إِنَّ ذَٰلِكَ مِنۡ عَزۡمِ ٱلۡأُمُورِ ۞',
      options: [
        { text: 'ٱلزَّكَوٰةَ', isCorrect: false },
        { text: 'ٱلۡحَجَّ', isCorrect: false },
        { text: 'ٱلصَّلَوٰةَ', isCorrect: true },
      ],
    },
    {
      title: 'سورة القمر',
      question:
        'ٱقۡتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ----- ۞(١) وَإِن يَرَوۡاْ ءَايَةٗ يُعۡرِضُواْ وَيَقُولُواْ سِحۡرٞ مُّسۡتَمِرّٞ ۞(٢)',
      options: [
        { text: 'ٱلنَّجۡمِ', isCorrect: false },
        { text: 'ٱلۡقَمَرِ', isCorrect: true },
        { text: 'ٱلشَّمۡسِ', isCorrect: false },
      ],
    },
    {
      title: 'سورة الرحمن',
      question:
        'يَٰمَعۡشَرَ ٱلۡجِنِّ وَٱلۡإِنسِ إِنِ ٱسۡتَطَعۡتُمۡ أَن تَنفُذُواْ مِنۡ أَقۡطَارِ ٱلسَّمَٰوَٰتِ وَ ----- فَٱنفُذُواْۚ لَا تَنفُذُونَ إِلَّا بِسُلۡطَٰنٖ ۞(٣٣)',
      options: [
        { text: 'ٱلۡجِبَالِ', isCorrect: false },
        { text: 'ٱلۡبَحۡرِ', isCorrect: false },
        { text: 'ٱلۡأَرۡضِ', isCorrect: true },
      ],
    },
  ];
  return (
    <div className='bg-neutral-100 min-h-screen w-full py-10'>
      <div className='w-2/3 mx-auto p-10 bg-white rounded-md shadow-md space-y-5'>
        <h1 className='text-center text-lg font-medium'>
          إختبار القرآن الكريم
        </h1>
        {questions.map((q, index) => (
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
                <button className='flex gap-1 items-center bg-blue-600 py-1 px-4 rounded-md text-white'>
                  {' '}
                  <MicrophoneIcon width={15} />
                  تسجيل الإجابة{' '}
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
        ))}
      </div>
      <ExampleComponent/>
    </div>
  );
};
export default App;
