import Question from './Question';
import { questions } from './questions';

const App = () => {
  return (
    <div className='bg-neutral-100 min-h-screen w-full py-10'>
      <div className='w-2/3 mx-auto p-10 bg-white rounded-md shadow-md space-y-5'>
        <h1 className='text-center text-lg font-medium'>
          إختبار القرآن الكريم
        </h1>
        {questions.map((q, index) => (
          <Question key={index} index={index} q={q} onAnswer={() => {}} />
        ))}
      </div>
    </div>
  );
};
export default App;
