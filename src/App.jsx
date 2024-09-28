import ExampleComponent from './ExampleComponent';
import Question from './Question';


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
          <Question key={index} index={index} q={q} />
        ))}
      </div>
      <ExampleComponent />
    </div>
  );
};
export default App;
