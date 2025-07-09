'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, ArrowLeft, ChevronDown, ChevronRight, BookOpen, Target, Lightbulb, Calendar, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface DSCGSession {
  year: string;
  questions: DSCGQuestion[];
}

interface DSCGQuestion {
  id: string;
  dossier?: string;
  questionNumber?: string;
  question: string;
  correction: string[];
  keyPoints?: string[];
}

const dscgSessions: DSCGSession[] = [
  {
    year: "2016",
    questions: [
      {
        id: "2016-1",
        dossier: "Dossier 2",
        questionNumber: "Question 2",
        question: "Identifier et apporter des commentaires sur les principales étapes à adopter dans cette perspective de mise en œuvre du projet ERP.",
        correction: [
          "Un projet est défini par l'AFNOR comme un **processus unique**, qui consiste en un ensemble d'activités coordonnées et maîtrisées comportant des dates de début et de fin, entreprise dans le but d'atteindre un objectif conforme à des exigences spécifiques telles que les contraintes de délais, de coût et de ressources.",
          "La mise en œuvre d&apos;un projet SI, tel que le renouvellement d&apos;un ERP, impacte l&apos;ensemble des personnels administratifs et financiers et comprend des étapes dans les domaines technique, organisationnel, logiciel et humain.",
          "Ces étapes incluent : le diagnostic, la validation, le choix d&apos;un chef de projet, la constitution d&apos;une équipe projet, le choix d&apos;une méthode de conduite de projet, la description détaillée du projet, l&apos;étude de faisabilité, la sélection de la solution, la finalisation de l&apos;étude technique, le lancement, la réalisation, le suivi d&apos;avancement, la concordance projet/réalisation, la finalisation et le suivi post-projet."
        ],
        keyPoints: [
          "Un projet ERP est un processus unique avec des contraintes spécifiques",
          "Impact sur l'ensemble des personnels administratifs et financiers",
          "Étapes multiples couvrant les aspects technique, organisationnel et humain"
        ]
      }
    ]
  },
  {
    year: "2018",
    questions: [
      {
        id: "2018-1",
        dossier: "Dossier 1",
        questionNumber: "Question 4",
        question: "Quelles sont les principales difficultés rencontrées lors de la mise en place d&apos;un PGI ? (Quatre difficultés sont attendues.)",
        correction: [
          "L&apos;une des difficultés majeures est la **nécessité d&apos;adapter certains processus aux contraintes du progiciel**. L&apos;entreprise doit parfois modifier son organisation pour s&apos;adapter aux contraintes du PGI, notamment pour utiliser la version et le paramétrage standard, ce qui implique un arbitrage entre l&apos;impact organisationnel et la complexité des paramétrages.",
          "Le projet d&apos;intégration d&apos;un PGI **impacte l&apos;organisation dans son ensemble**, ce qui génère des risques, en particulier si la gestion du changement est mal appréhendée.",
          "D&apos;autres difficultés incluent des **coûts induits très importants** et souvent sous-estimés, la dépendance vis-à-vis d&apos;un éditeur et d&apos;intégrateurs/consultants, ainsi que la complexité du paramétrage."
        ],
        keyPoints: [
          "Adaptation des processus aux contraintes du progiciel",
          "Impact organisationnel global et gestion du changement",
          "Coûts importants et souvent sous-estimés",
          "Dépendance vis-à-vis des éditeurs et consultants"
        ]
      }
    ]
  },
  {
    year: "2019",
    questions: [
      {
        id: "2019-1",
        dossier: "Dossier 1",
        questionNumber: "Question 2",
        question: "Cartographier les processus des deux métiers (le marketing et les achats/approvisionnement) ciblés par la démarche d&apos;urbanisation du SI de SOLIDOR.",
        correction: [
          "La **cartographie des processus métier** est une représentation graphique des activités articulées au sein d&apos;un métier, visant à délivrer un produit ou service créateur de valeur ajoutée.",
          "Pour le marketing et les achats/approvisionnement, la cartographie vise à schématiser comment &apos;acheter&apos; (choix de produit/service auprès d&apos;un fournisseur) et &apos;approvisionner&apos; (règlement de facture, paiement fournisseur) s&apos;inscrivent dans une logique de cohérence, suivi et contrôle.",
          "Elle détaille également comment la solution Planning & Tracking permet de &apos;personnaliser l&apos;offre&apos; et d&apos;&apos;évaluer la fidélité et la satisfaction&apos;.",
        ],
        keyPoints: [
          "Cartographie = représentation graphique des activités métier",
          "Objectif : délivrer un produit/service créateur de valeur",
          "Logique de cohérence, suivi et contrôle des processus"
        ]
      },
      {
        id: "2019-2",
        dossier: "Dossier 3",
        questionNumber: "Question 1",
        question: "Dans quelle mesure, déployer une démarche de pilotage du changement chez SOLIDOR vous semble-t-il pertinent et quelles évolutions en terme de pratiques de travail vous semblent importantes à envisager à la suite du déploiement de la solution Aleth Planning & Tracking ?",
        correction: [
          "Le déploiement de la solution Planning & Tracking implique pour les utilisateurs finaux d&apos;**harmoniser leurs processus** afin de mettre en place une cohérence du travail entre les fonctions achats et approvisionnement.",
          "Cette solution les oblige également à **standardiser leurs modes de collaboration** et à briser leurs routines établies de longue date, ce qui nécessite d&apos;apprendre une nouvelle méthode de travail et de l&apos;appliquer de manière uniforme.",
          "Le P&T de Aleth exige le respect strict d&apos;une nomenclature de saisie, car toute non-conformité peut entraîner des erreurs importantes dans le traitement des relations fournisseurs et des commandes, posant la question de la &apos;faute&apos; ou de la &apos;responsabilité&apos; de l&apos;utilisateur."
        ],
        keyPoints: [
          "Harmonisation des processus entre fonctions",
          "Standardisation des modes de collaboration",
          "Respect strict des nomenclatures de saisie",
          "Gestion de la responsabilité utilisateur"
        ]
      }
    ]
  },
  {
    year: "2020",
    questions: [
      {
        id: "2020-1",
        questionNumber: "Question 16",
        question: "Quelles sont les avancées majeures proposées par le nouveau système d&apos;information ?",
        correction: [
          "Les avancées majeures sont orientées sur les bénéfices de l&apos;intégration, notamment autour de l&apos;**homogénéité et de la standardisation des données et des processus**, ainsi que l&apos;unicité de la base de données.",
          "Le passage à un ERP, qui remplace un système non intégré organisé en silos applicatifs, permet une meilleure réactivité et homogénéité grâce à sa base de données unique et l'interopérabilité de ses modules."
        ],
        keyPoints: [
          "Homogénéité et standardisation des données/processus",
          "Unicité de la base de données",
          "Remplacement des silos applicatifs",
          "Meilleure réactivité et interopérabilité"
        ]
      }
    ]
  },
  {
    year: "2021",
    questions: [
      {
        id: "2021-1",
        dossier: "Dossier 3",
        questionNumber: "Question 8",
        question: "Quels sont les processus informatiques de traitement d&apos;une facture après la saisie de son entête dans un système d&apos;information comptable ?",
        correction: [
          "Il s&apos;agit d&apos;aborder la notion de **Workflow de validation de la facture**, qui permet de la rapprocher à son engagement ou de lui faire suivre un cycle de validation.",
          "Le processus doit aboutir à l&apos;obtention d&apos;un « Bon à Payer ».",
          "Le candidat peut également aborder la notion de cycle de paiement du fournisseur ou l'enregistrement en comptabilité générale/analytique."
        ],
        keyPoints: [
          "Workflow de validation de la facture",
          "Rapprochement avec l'engagement",
          "Obtention du 'Bon à Payer'",
          "Cycle de paiement fournisseur"
        ]
      }
    ]
  },
  {
    year: "2022",
    questions: [
      {
        id: "2022-1",
        dossier: "Dossier 2",
        questionNumber: "Question 3",
        question: "Décrire les étapes de mise en œuvre d&apos;un Workflow Facture en précisant la méthodologie de projet employée.",
        correction: [
          "Les étapes de mise en œuvre d&apos;un Workflow Facture sont celles de tout projet informatique : une phase d&apos;**analyse**, une phase de **paramétrage ou de développement**, une phase de **recette** (technique, fonctionnelle, métier…), et une phase de **formation et d&apos;accompagnement à la mise en production**.",
          "La méthodologie de projet généralement employée pour un Workflow Facture est la **méthode traditionnelle (en cascade) ou le cycle en V**. Cette méthode est recommandée car elle implique généralement une date de mise en production unique pour toutes les factures, ce qui permet une planification efficace du projet.",
          "La méthodologie Agile peut également être utilisée si une mise en production successive par typologie de facture est envisagée."
        ],
        keyPoints: [
          "4 phases : analyse, paramétrage/développement, recette, formation",
          "Méthode traditionnelle (cascade) ou cycle en V recommandée",
          "Mise en production unique pour toutes les factures",
          "Méthodologie Agile possible pour mise en production successive"
        ]
      }
    ]
  },
  {
    year: "2023",
    questions: [
      {
        id: "2023-1",
        dossier: "Dossier 1",
        questionNumber: "Question 9",
        question: "Après avoir défini la notion d&apos;urbanisation du Système d&apos;information, présenter un minimum de trois éléments de révision des documents d&apos;urbanisation dans le cadre des bascules de GED chez vos clients.",
        correction: [
          "L&apos;urbanisation du système d&apos;information vise à assurer la cohérence des évolutions et transformations du SI avec les objectifs métiers et opérationnels de l&apos;entreprise, en respectant la stratégie du SI. Son enjeu principal est d&apos;assurer la direction de la transformation continue du SI et la conservation d&apos;un SI applicatif homogène lors de chaque évolution ou changement de processus informatique.",
          "Les éléments de révision des documents d&apos;urbanisation incluent notamment les **éléments de processus**. La nouvelle GED peut apporter de nouvelles fonctionnalités applicatives qui doivent être cataloguées dans l&apos;urbanisation du SI sous forme de **cartographie des processus**.",
          "D&apos;autres éléments sont les infrastructures techniques, les interfaces, la sécurité et l&apos;architecture applicative."
        ],
        keyPoints: [
          "Urbanisation = cohérence des évolutions SI avec objectifs métiers",
          "Transformation continue et homogénéité du SI",
          "Cartographie des processus pour nouvelles fonctionnalités",
          "Révision : infrastructures, interfaces, sécurité, architecture"
        ]
      },
      {
        id: "2023-2",
        dossier: "Dossier 1",
        questionNumber: "Question 8",
        question: "Pour valider le Bon à payer d&apos;une facture, les utilisateurs acteurs du Workflow Facture auront accès à la GED. Quels sont les documents qui leurs permettront de valider le Workflow ?",
        correction: [
          "Les documents permettant de valider le Workflow incluent les documents d&apos;engagements (devis, commandes, marchés, contrats), les documents de livraisons (bons de livraison, comptes rendus d&apos;intervention), les précédentes factures du même produit/fournisseur, et les documents liés à l&apos;environnement du contenu de la facture (situations de travaux, documents de projets, certificats réglementaires, contrats)."
        ],
        keyPoints: [
          "Documents d&apos;engagements : devis, commandes, marchés, contrats",
          "Documents de livraisons : bons de livraison, comptes rendus",
          "Précédentes factures du même produit/fournisseur",
          "Documents environnementaux : situations travaux, projets, certificats"
        ]
      }
    ]
  }
];

export default function QuestionsDSCGPage() {
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleSession = (year: string) => {
    setExpandedSession(expandedSession === year ? null : year);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 p-3 rounded-full">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Questions DSCG
              </h1>
              <p className="text-gray-600">
                Annales du DSCG UE5 - Questions sur les processus
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              📚 À propos de ces questions
            </h3>
            <div className="text-blue-800 space-y-2">
              <p>Voici une sélection de questions issues des annales du DSCG UE5, accompagnées de leurs éléments de corrigé, qui abordent la notion de processus.</p>
              <p>La compréhension des processus, de leur modélisation et de leur reconfiguration est en effet centrale dans le Management des Systèmes d&apos;Information.</p>
              <p className="font-medium">Un <strong>processus</strong> est défini comme un ensemble de tâches coordonnées visant à satisfaire un besoin ou une demande, impliquant des éléments hétérogènes en interrelation. Il est dynamique et orienté vers un objectif.</p>
            </div>
          </div>

          {/* Sessions */}
          <div className="space-y-6">
            {dscgSessions.map((session) => (
              <div key={session.year} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Session Header */}
                <button
                  onClick={() => toggleSession(session.year)}
                  className="w-full p-6 text-left bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-red-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Session {session.year}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {session.questions.length} question{session.questions.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  {expandedSession === session.year ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {/* Session Content */}
                {expandedSession === session.year && (
                  <div className="border-t border-gray-200">
                    {session.questions.map((question, index) => (
                      <div key={question.id} className={`${index > 0 ? 'border-t border-gray-100' : ''}`}>
                        {/* Question Header */}
                        <button
                          onClick={() => toggleQuestion(question.id)}
                          className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900">
                                {question.dossier && question.questionNumber ? 
                                  `${question.dossier} - ${question.questionNumber}` : 
                                  question.questionNumber || `Question ${index + 1}`
                                }
                              </h4>
                              <p className="text-gray-600 text-sm line-clamp-2">
                                {question.question}
                              </p>
                            </div>
                          </div>
                          {expandedQuestion === question.id ? (
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          )}
                        </button>

                        {/* Question Content */}
                        {expandedQuestion === question.id && (
                          <div className="p-6 bg-white">
                            {/* Question */}
                            <div className="mb-6">
                              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4 text-red-600" />
                                Question
                              </h5>
                              <div className="bg-red-50 p-4 rounded-lg">
                                <p className="text-red-800 font-medium">{question.question}</p>
                              </div>
                            </div>

                            {/* Correction */}
                            <div className="mb-6">
                              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Éléments de correction
                              </h5>
                              <div className="bg-green-50 p-4 rounded-lg space-y-3">
                                {question.correction.map((element, idx) => (
                                  <div key={idx} className="text-green-800">
                                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ 
                                      __html: element.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>') 
                                    }} />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Key Points */}
                            {question.keyPoints && (
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4 text-yellow-600" />
                                  Points clés à retenir
                                </h5>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                  <ul className="text-yellow-800 space-y-2">
                                    {question.keyPoints.map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
              💡 Conseils pour l&apos;examen DSCG
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-indigo-800">
              <div>
                <h4 className="font-medium mb-2">Analyse :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Identifiez les processus métier concernés</li>
                  <li>• Analysez les enjeux organisationnels</li>
                  <li>• Repérez les impacts sur le SI</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Réponse :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Structurez votre réponse par étapes</li>
                  <li>• Utilisez le vocabulaire technique approprié</li>
                  <li>• Justifiez vos propositions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/quiz"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Quiz d&apos;évaluation
            </Link>
            <Link 
              href="/"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Retour au plan du cours
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}