// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const aptitudeQuestions = [
//   {
//     id: 1,
//     question: 'What is 15% of 240?',
//     options: ['36', '38', '40', '42'],
//     correct: 0,
//     category: 'Quantitative'
//   },
//   {
//     id: 2,
//     question: "Choose the correct synonym for 'Abundant':",
//     options: ['Scarce', 'Plentiful', 'Limited', 'Rare'],
//     correct: 1,
//     category: 'Verbal'
//   }
//   // Add more questions as needed!
// ];

// const AptitudeTest = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<{ [key: number]: number }>({});
//   const [isStarted, setIsStarted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(600);

//   useEffect(() => {
//     if (isStarted && timeLeft > 0) {
//       const timer = setInterval(() => { setTimeLeft(prev => prev - 1); }, 1000);
//       return () => clearInterval(timer);
//     } else if (timeLeft === 0) {
//       handleSubmit();
//     }
//   }, [isStarted, timeLeft]);

//   const formatTime = (sec: number) => {
//     const mins = Math.floor(sec / 60), secs = sec % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handleAnswer = (questionId: number, answerIndex: number) => setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));

//   const handleSubmit = () => {
//     let correct = 0;
//     aptitudeQuestions.forEach(q => { if (answers[q.id] === q.correct) correct++; });
//     localStorage.setItem('testResult', JSON.stringify({ totalScore: correct, totalQuestions: aptitudeQuestions.length, percentage: (correct / aptitudeQuestions.length) * 100 }));
//     navigate('/test-results');
//   };

//   if (!isStarted) {
//     return (
//       <div className="min-h-screen bg-gray-100 py-12 px-4">
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Aptitude Test Instructions</h1>
//             <ul className="list-disc ml-4 mb-8 text-gray-700">
//               <li>Total Questions: {aptitudeQuestions.length}</li>
//               <li>Duration: 10 minutes</li>
//               <li>Type: MCQ</li>
//               <li>No negative marking</li>
//             </ul>
//             <button onClick={() => setIsStarted(true)} className="btn-primary w-full">Start Test</button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const question = aptitudeQuestions[currentQuestion];
//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
//           <div className="text-2xl font-bold text-primary-600">{formatTime(timeLeft)}</div>
//           <div className="text-gray-600">Question {currentQuestion + 1} of {aptitudeQuestions.length}</div>
//           <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700">Submit Test</button>
//         </div>
//         <div className="grid md:grid-cols-4 gap-6">
//           <div className="md:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
//               <h3 className="font-semibold text-gray-800 mb-4">Questions</h3>
//               <div className="grid grid-cols-5 gap-2">
//                 {aptitudeQuestions.map((q, idx) => (
//                   <button key={q.id} onClick={() => setCurrentQuestion(idx)} className={`w-10 h-10 rounded font-semibold ${currentQuestion === idx ? 'bg-primary-600 text-white' : answers[q.id] !== undefined ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{idx + 1}</button>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="md:col-span-3">
//             <div className="bg-white rounded-lg shadow-md p-8">
//               <div className="mb-4">
//                 <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
//                   {question.category}
//                 </span>
//               </div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//                 {currentQuestion + 1}. {question.question}
//               </h2>
//               <div className="space-y-3">
//                 {question.options.map((option, idx) => (
//                   <button key={idx} onClick={() => handleAnswer(question.id, idx)} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${answers[question.id] === idx ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}>
//                     <span className="text-gray-700 font-medium">{option}</span>
//                   </button>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-8">
//                 <button onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))} disabled={currentQuestion === 0} className="px-6 py-2 rounded font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300">Previous</button>
//                 <button onClick={() => setCurrentQuestion(prev => Math.min(aptitudeQuestions.length - 1, prev + 1))} disabled={currentQuestion === aptitudeQuestions.length - 1} className="px-6 py-2 rounded font-semibold btn-primary">Next</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AptitudeTest;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const aptitudeQuestions = [
  {
    id: 1,
    question: 'What is 15% of 240?',
    options: ['36', '38', '40', '42'],
    correct: 0,
    category: 'Quantitative'
  },
  {
    id: 2,
    question: "Choose the correct synonym for 'Abundant':",
    options: ['Scarce', 'Plentiful', 'Limited', 'Rare'],
    correct: 1,
    category: 'Verbal'
  }
];

const AptitudeTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => { setTimeLeft(prev => prev - 1); }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [isStarted, timeLeft]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    let correct = 0;
    aptitudeQuestions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    localStorage.setItem('testResult', JSON.stringify({
      totalScore: correct,
      totalQuestions: aptitudeQuestions.length,
      percentage: (correct / aptitudeQuestions.length) * 100
    }));
    navigate('/test-results');
  };

  // Start Screen
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Aptitude Test</h1>
              <p className="text-gray-600">Read the instructions carefully before starting</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h2 className="font-semibold text-gray-900 mb-2">Test Instructions</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Total Questions: <strong>{aptitudeQuestions.length}</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Duration: <strong>10 minutes</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Question Type: <strong>Multiple Choice (MCQ)</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No negative marking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Timer will start immediately upon clicking "Start Test"</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setIsStarted(true)}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Test
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Test Screen
  const question = aptitudeQuestions[currentQuestion];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`text-2xl font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-900'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <div className="text-center">
              <span className="text-gray-600">Question {currentQuestion + 1} of {aptitudeQuestions.length}</span>
              <div className="text-sm text-gray-500 mt-1">{answeredCount} answered</div>
            </div>

            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit Test
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Navigator Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Question Navigator</h3>
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2">
                {aptitudeQuestions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(idx)}
                    className={`w-10 h-10 rounded-md font-medium text-sm transition-colors ${
                      currentQuestion === idx
                        ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                        : answers[q.id] !== undefined
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                  <span className="text-gray-600">Current</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-gray-600">Answered</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded mr-2"></div>
                  <span className="text-gray-600">Not Answered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6 sm:p-8">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {question.category}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Question {currentQuestion + 1}: {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(question.id, idx)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      answers[question.id] === idx
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                        answers[question.id] === idx
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[question.id] === idx && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-gray-800 font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  ← Previous
                </button>

                {currentQuestion < aptitudeQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestion(prev => prev + 1)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-600 text-white rounded-md font-medium text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Submit Test
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;
