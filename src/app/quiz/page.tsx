'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { HelpCircle, ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un processus selon le cours ?",
    options: [
      "Un ensemble de tâches coordonnées permettant de satisfaire un besoin",
      "Une suite d'instructions informatiques",
      "Un document de procédure",
      "Un logiciel de gestion"
    ],
    correctAnswer: 0,
    explanation: "Un processus est défini comme un ensemble de tâches coordonnées permettant de satisfaire un besoin, de répondre à une demande."
  },
  {
    id: 2,
    question: "Combien de catégories de processus distingue-t-on habituellement ?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "On distingue habituellement 3 catégories de processus : les processus de pilotage, les processus métiers et les processus supports."
  },
  {
    id: 3,
    question: "Quel est le rôle principal du système d'information dans les processus ?",
    options: [
      "Stocker les données",
      "Permettre la coordination des activités",
      "Automatiser les tâches",
      "Générer des rapports"
    ],
    correctAnswer: 1,
    explanation: "Le système d'information permet de réaliser la coordination préalable à tout processus grâce au transfert des informations."
  },
  {
    id: 4,
    question: "Dans la méthode MERISE Événement/Résultat, combien de concepts fondamentaux distingue-t-on ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "La méthode MERISE Événement/Résultat repose sur 5 concepts : l'événement, la synchronisation, l'opération, les règles d'émission et le résultat."
  },
  {
    id: 5,
    question: "Que signifie l'acronyme DCR pour retenir les rôles de l'information ?",
    options: [
      "Données, Contrôle, Réseau",
      "Déclenche, Contrôle, Résultat",
      "Document, Communication, Rapport",
      "Définit, Coordonne, Relie"
    ],
    correctAnswer: 1,
    explanation: "DCR signifie : Déclenche (le processus), Contrôle (la bonne réalisation), Résultat (fourni par le processus)."
  },
  {
    id: 6,
    question: "Quel est le premier niveau de l'approche Venkatraman ?",
    options: [
      "Intégration interne",
      "Automatisation localisée",
      "Réingénierie des processus",
      "Transformation organisationnelle"
    ],
    correctAnswer: 1,
    explanation: "Le premier niveau de l'approche Venkatraman est l'automatisation localisée, qui consiste à automatiser des tâches individuelles sans remettre en cause l'organisation."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(selectedAnswers[currentQuestion - 1] !== -1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correctAnswer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <HelpCircle className="h-10 w-10 text-orange-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Résultats du Quiz
              </h1>
              <p className="text-gray-600">
                Voici votre performance sur les processus et systèmes d&apos;information
              </p>
            </div>

            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-orange-600' : 'text-red-600'
              }`}>
                {percentage}%
              </div>
              <div className="text-xl text-gray-700 mb-2">
                {score} / {questions.length} bonnes réponses
              </div>
              <div className={`text-lg font-medium ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-orange-600' : 'text-red-600'
              }`}>
                {
                  percentage >= 80 ? '🎉 Excellent ! Vous maîtrisez parfaitement le sujet.' :
                  percentage >= 60 ? '👍 Bien ! Quelques révisions seraient bénéfiques.' :
                  '📚 Il serait bon de revoir le cours avant de continuer.'
                }
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <button
                onClick={resetQuiz}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="h-4 w-4" />
                Refaire le quiz
              </button>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link 
                href="/section-3"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Section III - Optimisation
              </Link>
              <Link 
              href="/cas-pratiques"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              Cas pratiques
              <ArrowRight className="h-4 w-4" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">
                Quiz d&apos;évaluation
              </h1>
              <p className="text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Progression</div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {question.question}
            </h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion] === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrectAnswer = showExplanation;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      showCorrectAnswer
                        ? isCorrect
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : isSelected
                          ? 'border-red-500 bg-red-50 text-red-900'
                          : 'border-gray-200 bg-gray-50 text-gray-600'
                        : isSelected
                        ? 'border-orange-500 bg-orange-50 text-orange-900'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showCorrectAnswer
                          ? isCorrect
                            ? 'border-green-500 bg-green-500'
                            : isSelected
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                          : isSelected
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-gray-300'
                      }`}>
                        {showCorrectAnswer && isCorrect && <CheckCircle className="h-4 w-4 text-white" />}
                        {showCorrectAnswer && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-white" />}
                      </div>
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`p-6 rounded-lg mb-8 ${
              selectedAnswers[currentQuestion] === question.correctAnswer
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                selectedAnswers[currentQuestion] === question.correctAnswer
                  ? 'text-green-900'
                  : 'text-red-900'
              }`}>
                {selectedAnswers[currentQuestion] === question.correctAnswer ? '✅ Correct !' : '❌ Incorrect'}
              </h3>
              <p className={selectedAnswers[currentQuestion] === question.correctAnswer ? 'text-green-800' : 'text-red-800'}>
                {question.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </button>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
              >
                {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Suivant'}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}