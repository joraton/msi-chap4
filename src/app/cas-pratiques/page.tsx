'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, ArrowLeft, ChevronDown, ChevronRight, BookOpen, Target, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface DSCGQuestion {
  id: number;
  title: string;
  context: string;
  question: string;
  solution: string;
  methodology: string[];
  keyPoints: string[];
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    title: "Modélisation d&apos;un processus de commande",
    context: "Une entreprise de distribution souhaite optimiser son processus de traitement des commandes. Actuellement, les étapes sont les suivantes : réception de la commande par email, vérification de la solvabilité du client, contrôle des stocks, préparation de la commande, facturation et expédition.",
    question: "Modélisez ce processus en utilisant la méthode MERISE Événement/Résultat. Identifiez les 5 concepts fondamentaux pour chaque étape principale.",
    solution: "**Événements :** Réception commande client, Confirmation solvabilité, Validation stock disponible\n\n**Synchronisations :** ET (commande + solvabilité + stock) pour déclencher la préparation\n\n**Opérations :** Vérification solvabilité, Contrôle stocks, Préparation commande, Facturation, Expédition\n\n**Règles d&apos;émission :** Si solvable ET stock suffisant → préparation ; Si préparation OK → facturation ; Si facturation OK → expédition\n\n**Résultats :** Rapport solvabilité, Confirmation stock, Commande préparée, Facture émise, Bon d&apos;expédition",
    methodology: [
      "Identifier tous les événements déclencheurs",
      "Définir les conditions de synchronisation",
      "Lister les opérations ininterruptibles",
      "Établir les règles métier",
      "Spécifier les résultats produits"
    ],
    keyPoints: [
      "Distinguer les événements des opérations",
      "Les synchronisations définissent les conditions",
      "Une opération ne peut être interrompue",
      "Les résultats peuvent devenir des événements"
    ]
  },
  {
    id: 2,
    title: "Optimisation d&apos;un processus RH",
    context: "Le service RH d&apos;une ESN de 200 collaborateurs traite manuellement les demandes de congés. Le processus actuel prend 5 jours en moyenne et génère des erreurs de planification. La direction souhaite améliorer ce processus.",
    question: "Proposez une démarche d&apos;optimisation en appliquant l&apos;approche Venkatraman. Justifiez le niveau choisi et détaillez les améliorations possibles.",
    solution: "**Niveau recommandé : Intégration interne (niveau 2)**\n\n**Justification :** Le processus existe mais manque d&apos;intégration avec les autres systèmes RH.\n\n**Améliorations proposées :**\n- Mise en place d&apos;un portail RH intégré\n- Automatisation des validations hiérarchiques\n- Interface avec le système de paie\n- Tableau de bord temps réel pour les managers\n- Notifications automatiques\n\n**Bénéfices attendus :** Réduction du délai à 1 jour, élimination des erreurs, meilleure visibilité",
    methodology: [
      "Analyser l'existant et identifier les dysfonctionnements",
      "Évaluer le niveau de maturité actuel",
      "Choisir le niveau d&apos;intervention approprié",
      "Définir les améliorations concrètes",
      "Estimer les bénéfices et les coûts"
    ],
    keyPoints: [
      "L'automatisation localisée ne suffit pas toujours",
      "L'intégration améliore la cohérence globale",
      "Mesurer l'impact avant/après",
      "Impliquer les utilisateurs dans la conception"
    ]
  },
  {
    id: 3,
    title: "Analyse des dysfonctionnements",
    context: "Une entreprise constate que son processus de facturation génère 15% d&apos;erreurs, principalement dues à des saisies manuelles redondantes entre les services commercial et comptable. Les clients se plaignent des délais de facturation (10 jours en moyenne).",
    question: "Analysez les dysfonctionnements et proposez des solutions en distinguant les causes organisationnelles des causes techniques. Évaluez l'impact du SI dans ces dysfonctionnements.",
    solution: "**Causes organisationnelles :**\n- Saisies redondantes entre services\n- Manque de coordination commercial/comptable\n- Absence de contrôles qualité\n\n**Causes techniques :**\n- Systèmes non intégrés\n- Saisies manuelles multiples\n- Absence de validation automatique\n\n**Rôle du SI dans les dysfonctionnements :**\n- Défaut de coordination (pas de transfert d&apos;information)\n- Absence de contrôles automatiques\n- Redondance des saisies\n\n**Solutions proposées :**\n- Intégration CRM-ERP\n- Workflow de validation\n- Contrôles automatiques\n- Interface unique de saisie",
    methodology: [
      "Cartographier le processus actuel",
      "Identifier les points de dysfonctionnement",
      "Distinguer causes organisationnelles/techniques",
      "Analyser le rôle du SI",
      "Proposer des solutions ciblées"
    ],
    keyPoints: [
      "Les dysfonctionnements ont souvent des causes multiples",
      "Le SI peut être cause ou solution",
      "Traiter les causes, pas seulement les symptômes",
      "Mesurer l'amélioration avec des indicateurs"
    ]
  }
];

export default function CasPratiquesPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const toggleSolution = (questionId: number) => {
    setShowSolution(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-full">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Cas pratiques
              </h1>
              <p className="text-gray-600">
                Exercices pratiques et cas concrets d&apos;application
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              📚 Conseils pour les cas pratiques
            </h3>
            <div className="text-blue-800 space-y-2">
              <p>• Lisez attentivement le contexte et identifiez les enjeux</p>
              <p>• Structurez votre réponse en suivant une méthodologie claire</p>
              <p>• Utilisez le vocabulaire technique approprié</p>
              <p>• Justifiez vos choix et propositions</p>
              <p>• Pensez aux aspects pratiques de mise en œuvre</p>
            </div>
          </div>

          {/* Exercices du cours */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              Exercices du cours
            </h2>
            
            {/* Exercice 1 - Société ADA */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">EXERCICE 1 - Société ADA</h3>
              
              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Contexte :</h4>
                <p className="text-gray-700 mb-4">
                  Une société ADA, spécialisée dans la construction utilise depuis peu un PGI/ERP spécifique pour le secteur du bâtiment. 
                  Un des éléments clés du suivi des chantiers repose sur les fiches de chantiers établis par les chefs de travaux. 
                  Jusqu&apos;à présent ceux-ci pouvaient saisir leur fiche dans des fichiers Excel qui étaient importés dans le logiciel. 
                  Avec la mise en place du PGI la saisie a pris une importance fondamentale tant et si bien qu&apos;elle est dévolue à une secrétaire comptable, à qui sont transmis les fiches.
                </p>
                
                <p className="text-gray-700 mb-4">
                  La société ADA mène de front jusqu&apos;à une douzaine de chantiers au cours d&apos;une même semaine. Un chef de chantier suit un seul chantier à la fois, 
                  il dirige le travail des ouvriers. Un conducteur de travaux suit en général entre 2 et 4 chantiers avec ses chefs de chantiers, 
                  il veille au respect de la commande du client et des délais. La secrétaire est chargée de saisir les données.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-yellow-900 mb-2">Processus actuel :</h5>
                  <ul className="text-yellow-800 space-y-2">
                    <li>• Chaque fin de journée, le chef de chantier doit remplir la fiche de suivi du chantier</li>
                    <li>• Chaque fin de semaine, le conducteur des travaux en fait une vérification</li>
                    <li>• Si la fiche est correcte, il la signe et la transfère à la secrétaire</li>
                    <li>• Chaque lundi matin de la semaine suivante la secrétaire la saisie dans le PGI</li>
                    <li>• La fiche est alors considérée comme saisie et est archivée</li>
                    <li>• Si la fiche est mal complétée, le conducteur demande des modifications au chef de chantier</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-red-900 mb-2">Problèmes identifiés :</h5>
                  <ul className="text-red-800 space-y-2">
                    <li>• Les fiches ne sont pas toujours rédigées de façon très lisible</li>
                    <li>• Nombreuses erreurs au niveau de la saisie des informations</li>
                    <li>• Fort mécontentement chez les ouvriers mal rémunérés</li>
                    <li>• Charge de travail importante de la secrétaire</li>
                    <li>• Délai de disponibilité de l&apos;information trop long</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Questions :</h4>
                <ol className="text-gray-700 space-y-2">
                  <li>1) Définissez la notion de processus</li>
                  <li>2) En quoi les processus sont-ils fortement associés aux problématiques des systèmes d&apos;information ?</li>
                  <li>3) À quel type de processus peut-on rattacher le processus décrit ?</li>
                  <li>4) Modélisez ce processus selon le formalisme événement résultat</li>
                  <li>5) Proposez une solution permettant d&apos;améliorer ce processus</li>
                </ol>
              </div>
            </div>
            
            {/* Exercice 2 - INFO-CREDIT */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">EXERCICE 2 - MODÉLISATION ET RECONFIGURATION</h3>
              
              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Contexte - Société INFO-CREDIT :</h4>
                <p className="text-gray-700 mb-4">
                  La société INFO-CREDIT a pour vocation le financement des ordinateurs, des logiciels et des services fournis par la division INFO-CORPO, 
                  à destination de clients professionnels. Lors qu&apos;une demande de crédit d&apos;un client, le vendeur d&apos;INFO-CORPO attendait souvent entre 6 et 15 jours 
                  pour avoir une réponse car il ne fallait pas moins de 5 étapes pour traiter la demande.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-blue-900 mb-2">Processus initial :</h5>
                  <ol className="text-blue-800 space-y-2">
                    <li>1. Le client effectue sa demande de crédit auprès d&apos;INFO-CREDIT</li>
                    <li>2. Un dossier à compléter lui est transmis</li>
                    <li>3. Vérification des pièces (dossier complet ou demande de complément)</li>
                    <li>4. Vérification de solvabilité générale par un comptable financier</li>
                    <li>5. Vérification technique pour déterminer le taux d&apos;intérêt et les garanties</li>
                    <li>6. Transmission au client pour accord</li>
                    <li>7. Transmission au service de libération des fonds pour versement</li>
                  </ol>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-orange-900 mb-2">Problèmes du processus initial :</h5>
                  <ul className="text-orange-800 space-y-2">
                    <li>• Délai de traitement : 6 à 15 jours</li>
                    <li>• Clients pouvaient renoncer ou aller ailleurs</li>
                    <li>• Création d&apos;un bureau de contrôle qui a allongé les délais</li>
                    <li>• Structure du processus inadaptée</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-green-900 mb-2">Solution mise en place :</h5>
                  <ul className="text-green-800 space-y-2">
                    <li>• Remplacement des spécialistes par des généralistes</li>
                    <li>• Système informatisé donnant accès à toutes les données</li>
                    <li>• Pré-saisie des renseignements généraux par le client</li>
                    <li>• Dissociation saisie/fourniture des pièces</li>
                    <li>• Processus différenciés selon la complexité du financement</li>
                    <li>• Vérifications complémentaires uniquement pour les dossiers complexes</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Résultats :</h5>
                  <ul className="text-purple-800 space-y-2">
                    <li>• Délai de traitement : 4 heures pour la majorité des dossiers</li>
                    <li>• Nombre de dossiers traités multiplié par 100 !</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Question :</h4>
                <p className="text-gray-700 font-medium">
                  Identifiez les causes d&apos;amélioration de ce processus
                </p>
              </div>
            </div>
          </div>

          {/* Questions DSCG */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-purple-600" />
              Questions DSCG
            </h2>
            {dscgQuestions.map((question) => (
              <div key={question.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Question Header */}
                <button
                  onClick={() => toggleQuestion(question.id)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Question {question.id} : {question.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cliquez pour développer la question
                    </p>
                  </div>
                  {expandedQuestion === question.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {/* Question Content */}
                {expandedQuestion === question.id && (
                  <div className="p-6 border-t border-gray-200">
                    {/* Context */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        Contexte
                      </h4>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800">{question.context}</p>
                      </div>
                    </div>

                    {/* Question */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-red-600" />
                        Question
                      </h4>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-red-800 font-medium">{question.question}</p>
                      </div>
                    </div>

                    {/* Methodology */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-yellow-600" />
                        Méthodologie recommandée
                      </h4>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <ol className="text-yellow-800 space-y-2">
                          {question.methodology.map((step, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* Solution Toggle */}
                    <div className="mb-4">
                      <button
                        onClick={() => toggleSolution(question.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {showSolution[question.id] ? 'Masquer la solution' : 'Voir la solution'}
                      </button>
                    </div>

                    {/* Solution */}
                    {showSolution[question.id] && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            ✅ Solution détaillée
                          </h4>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-green-800 whitespace-pre-line">
                              {question.solution}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            🎯 Points clés à retenir
                          </h4>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <ul className="text-purple-800 space-y-2">
                              {question.keyPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-purple-600 mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
              💡 Conseils pour réussir les cas pratiques
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-indigo-800">
              <div>
                <h4 className="font-medium mb-2">Analyse :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Identifiez les acteurs et leurs rôles</li>
                  <li>• Repérez les dysfonctionnements</li>
                  <li>• Analysez les causes racines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Proposition :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Justifiez vos choix techniques</li>
                  <li>• Évaluez les impacts organisationnels</li>
                  <li>• Proposez des indicateurs de suivi</li>
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
              href="/questions-dscg"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Questions DSCG
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}