import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';

const quizData = [
  {
    id: 1,
    question: "Que signifie l'acronyme NIRD ?",
    options: [
      "Numérique Innovant, Responsable et Durable",
      "Numérique Inclusif, Responsable et Durable",
      "Numérique Intégré, Recyclé et Durable",
      "Numérique Intelligent, Rationnel et Durable"
    ],
    correct: 1,
    explanation: "NIRD signifie 'Numérique Inclusif, Responsable et Durable', les trois piliers du projet."
  },
  {
    id: 2,
    question: "Où a été lancé le projet NIRD ?",
    options: [
      "Lycée Victor Hugo de Lille",
      "Lycée Carnot de Bruay-Labuissière",
      "Collège Jean Moulin de Lens",
      "Lycée Gambetta d'Arras"
    ],
    correct: 1,
    explanation: "Le projet NIRD a été initié au lycée Carnot de Bruay-Labuissière dans le Pas-de-Calais."
  },
  {
    id: 3,
    question: "Combien de libertés offrent les logiciels libres selon le projet NIRD ?",
    options: [
      "2 libertés",
      "3 libertés",
      "4 libertés",
      "5 libertés"
    ],
    correct: 2,
    explanation: "Les logiciels libres offrent 4 libertés : exécuter, copier, modifier et distribuer le programme."
  },
  {
    id: 4,
    question: "Quel système d'exploitation est utilisé dans le cadre du projet NIRD ?",
    options: [
      "Windows",
      "macOS",
      "GNU/Linux",
      "Chrome OS"
    ],
    correct: 2,
    explanation: "Le projet NIRD utilise GNU/Linux pour tous les ordinateurs reconditionnés et déployés."
  },
  {
    id: 5,
    question: "Quelle distribution Linux est utilisée pour les écoles primaires ?",
    options: [
      "Ubuntu",
      "Debian",
      "Primtux",
      "Fedora"
    ],
    correct: 2,
    explanation: "La distribution Primtux est spécifiquement utilisée pour équiper les écoles primaires."
  },
  {
    id: 6,
    question: "Combien de participants ont assisté à la Journée du Libre Éducatif 2025 ?",
    options: [
      "100 participants",
      "150 participants",
      "250 participants",
      "500 participants"
    ],
    correct: 2,
    explanation: "Le 4 avril 2025, 250 participants de toute la France se sont réunis au lycée Carnot."
  },
  {
    id: 7,
    question: "Combien de machines équipent la salle informatique NIRD du lycée ?",
    options: [
      "15 machines",
      "20 machines",
      "30 machines",
      "50 machines"
    ],
    correct: 2,
    explanation: "Une salle informatique de 30 machines 100% logiciels libres est ouverte à tous."
  },
  {
    id: 8,
    question: "Quel est le taux de réussite au Bac NSI depuis 5 ans au lycée Carnot ?",
    options: [
      "85%",
      "90%",
      "95%",
      "100%"
    ],
    correct: 3,
    explanation: "Le lycée affiche un taux de réussite de 100% au Bac NSI depuis 5 ans, démontrant l'efficacité de l'approche."
  },
  {
    id: 9,
    question: "Comment les élèves transportent-ils les PC reconditionnés vers les écoles ?",
    options: [
      "En voiture",
      "En bus",
      "À vélo avec une Capsul Bike",
      "Par la poste"
    ],
    correct: 2,
    explanation: "Les élèves livrent les PC à vélo grâce à une Capsul Bike qui permet de stocker le matériel."
  },
  {
    id: 10,
    question: "Combien d'années supplémentaires peuvent vivre les PC reconditionnés ?",
    options: [
      "1 à 2 ans",
      "2 à 4 ans",
      "5 à 10 ans",
      "Plus de 15 ans"
    ],
    correct: 2,
    explanation: "Grâce à GNU/Linux, les PC sont relancés pour 5, 8, voire 10 ans, luttant contre l'obsolescence programmée."
  }
];

const NirdQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleAnswerClick = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowResult(true);
      
      const isCorrect = index === quizData[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setAnsweredQuestions([...answeredQuestions, {
        question: currentQuestion,
        selected: index,
        correct: quizData[currentQuestion].correct,
        isCorrect
      }]);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnsweredQuestions([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return "🎉 Parfait ! Vous maîtrisez le projet NIRD !";
    if (percentage >= 80) return "👏 Excellent ! Vous connaissez très bien NIRD !";
    if (percentage >= 60) return "👍 Bien joué ! Continuez à découvrir NIRD !";
    if (percentage >= 40) return "📚 Pas mal ! Approfondissez vos connaissances sur NIRD.";
    return "💪 Courage ! Explorez davantage le projet NIRD.";
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mt-8">
            <div className="text-center mb-8">
              <Award className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Terminé !</h2>
              <div className="text-6xl font-bold text-green-600 mb-4">
                {score}/{quizData.length}
              </div>
              <p className="text-xl text-gray-600 mb-6">{getScoreMessage()}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Récapitulatif</h3>
              {answeredQuestions.map((answer, idx) => (
                <div key={idx} className={`p-4 rounded-lg border-2 ${answer.isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                  <div className="flex items-start gap-3">
                    {answer.isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-2">
                        Question {idx + 1}: {quizData[answer.question].question}
                      </p>
                      {!answer.isCorrect && (
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Bonne réponse :</span> {quizData[answer.question].options[answer.correct]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={resetQuiz}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-6 h-6" />
              Recommencer le Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-3">
            Quiz NIRD
          </h1>
          <p className="text-xl text-gray-600">
            Numérique Inclusif, Responsable et Durable
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1}/{quizData.length}</span>
            <span>Score: {score}/{quizData.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-600 h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 font-medium
                    ${showCorrect ? 'bg-green-100 border-green-500 text-green-800' :
                      showIncorrect ? 'bg-red-100 border-red-500 text-red-800' :
                      isSelected ? 'bg-blue-50 border-blue-400 text-blue-800' :
                      'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-800'}
                    ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-not-allowed'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                    {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`mt-6 p-4 rounded-xl ${selectedAnswer === question.correct ? 'bg-green-50 border-2 border-green-300' : 'bg-blue-50 border-2 border-blue-300'}`}>
              <p className="text-gray-800 font-medium mb-2">
                {selectedAnswer === question.correct ? '✅ Bonne réponse !' : 'ℹ️ Explication :'}
              </p>
              <p className="text-gray-700">{question.explanation}</p>
            </div>
          )}
        </div>

        {showResult && (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            {currentQuestion < quizData.length - 1 ? (
              <>
                Question Suivante
                <ChevronRight className="w-6 h-6" />
              </>
            ) : (
              <>
                Voir les Résultats
                <Award className="w-6 h-6" />
              </>
            )}
          </button>
        )}

        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="mb-2">Un projet du Lycée Carnot de Bruay-Labuissière</p>
          <p>Pour un numérique libre et écocitoyen dans les établissements scolaires</p>
        </div>
      </div>
    </div>
  );
};

export default NirdQuiz;