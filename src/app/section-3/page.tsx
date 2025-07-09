import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, ArrowLeft, ArrowRight, TrendingUp, Target, Zap, RefreshCw, BarChart, Users, UserCheck, CheckCircle, GitBranch, MapPin, Shield, Database } from 'lucide-react';
import Link from 'next/link';

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Brain className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section III - Optimisation des Processus
              </h1>
              <p className="text-gray-600">
                Amélioration continue et retombées stratégiques
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                🎯 Objectif de l&apos;optimisation
              </h3>
              <p className="text-blue-800">
                Les retombées stratégiques apportées par la modification des processus tiennent 
                une place centrale dans les choix d&apos;une firme. L&apos;optimisation vise à améliorer 
                l&apos;efficacité, réduire les coûts et augmenter la valeur créée.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              L&apos;approche Venkatraman
            </h2>
            
            <p className="text-gray-700 mb-6">
              L&apos;approche Venkatraman combine les retombées avec l&apos;importance du changement. 
              Elle définit 5 niveaux d&apos;intervention, dont les 3 premiers correspondent à la gestion des processus.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-green-900">Automatisation localisée</h3>
                </div>
                <p className="text-green-800 mb-3">
                  Automatisation de tâches individuelles sans remettre en cause l&apos;organisation.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <strong>Exemple :</strong> Mise en place d&apos;un logiciel de comptabilité pour remplacer 
                  les calculs manuels, sans changer les procédures.
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-900">Intégration interne</h3>
                </div>
                <p className="text-yellow-800 mb-3">
                  Intégration des systèmes et processus à l&apos;intérieur de l&apos;organisation.
                </p>
                <div className="bg-yellow-100 p-3 rounded">
                  <strong>Exemple :</strong> Mise en place d&apos;un ERP qui intègre comptabilité, 
                  gestion des stocks et facturation.
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-orange-900">Réingénierie des processus</h3>
                </div>
                <p className="text-orange-800 mb-3">
                  Refonte complète des processus métier pour optimiser l&apos;efficacité.
                </p>
                <div className="bg-orange-100 p-3 rounded">
                  <strong>Exemple :</strong> Suppression d&apos;étapes intermédiaires, parallélisation 
                  de tâches séquentielles, élimination des redondances.
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🧠 Moyen mnémotechnique - ARI
              </h3>
              <p className="text-gray-700 mb-3">
                Pour retenir les 3 niveaux de gestion des processus, pensez à <strong>ARI</strong> :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-green-200 p-3 rounded text-center">
                  <strong>A</strong>utomatisation localisée
                </div>
                <div className="bg-yellow-200 p-3 rounded text-center">
                  <strong>R</strong>éorganisation (Intégration)
                </div>
                <div className="bg-orange-200 p-3 rounded text-center">
                  <strong>I</strong>nnovation (Réingénierie)
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les leviers de reconfiguration (Hammer & Champy)
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                📚 Définition du Reengineering
              </h3>
              <p className="text-blue-800 mb-4">
                Selon M. Hammer et J. Champy : <em>&quot;Une remise en cause fondamentale et une redéfinition radicale 
                des processus opérationnels pour obtenir des gains spectaculaires dans les performances critiques 
                que constituent aujourd&apos;hui les coûts, la qualité, le service et la rapidité.&quot;</em>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                🎯 Objectifs de la reconfiguration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-red-500" />
                  <span className="text-green-800">Réduction des coûts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span className="text-green-800">Réduction des délais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-purple-500" />
                  <span className="text-green-800">Hausse de la fiabilité</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="h-5 w-5 text-yellow-500" />
                  <span className="text-green-800">Hausse de la valeur client</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                💡 Exemples concrets de reconfiguration
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Exemple 1 : Restauration rapide (McDonald&apos;s)</h4>
                  <p className="text-yellow-800">
                    La saisie des commandes sur un écran tactile permet de réduire les erreurs, 
                    d&apos;accélérer le service et de personnaliser les commandes tout en réduisant 
                    les coûts de personnel.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Exemple 2 : Facture électronique</h4>
                  <p className="text-yellow-800">
                    Pour les cabinets d&apos;expertise-comptable, la facture électronique élimine 
                    les délais postaux, réduit les coûts d&apos;impression et d&apos;envoi, et améliore 
                    la traçabilité des documents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  1. Regroupement de plusieurs postes en un seul
                </h4>
                <p className="text-yellow-800 mb-3">
                  Une seule personne peut avoir la charge du processus entier (&quot;chargé de cas&quot;) et représente 
                  un point de contact unique pour le client. L&apos;élimination des discontinuités entraîne celle 
                  des erreurs, retards et doublons.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  2. Participation du client au processus
                </h4>
                <p className="text-green-800 mb-3">
                  Le client peut fournir des informations, saisir des formulaires directement utilisables. 
                  Cette saisie permet de gagner du temps, d&apos;économiser des ressources et de réduire les erreurs.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  3. Décisions prises par les salariés
                </h4>
                <p className="text-blue-800 mb-3">
                  La prise de décision est intégrée au travail. Les employés prennent maintenant les décisions 
                  eux-mêmes avec les outils appropriés (système expert, bases de données).
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  4. Ordre naturel des étapes
                </h4>
                <p className="text-purple-800 mb-3">
                  Le travail s&apos;ordonne selon l&apos;ordre nécessaire de succession des tâches, exploitant 
                  l&apos;ordre naturel plutôt que l&apos;ordre artificiel imposé par la linéarité.
                </p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  5. Processus à versions multiples
                </h4>
                <p className="text-orange-800 mb-3">
                  En distinguant les processus selon leur complexité, on peut traiter des cas simples 
                  d&apos;un côté, et réserver les procédures plus lourdes aux seuls cas complexes.
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  6. Travail réalisé là où c&apos;est le plus logique
                </h4>
                <p className="text-red-800 mb-3">
                  Le travail est redistribué à travers les frontières organisationnelles pour éviter 
                  des processus coûteux. Exemple : chaque service achète ses propres fournitures.
                </p>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  7. Réduction des vérifications et contrôles
                </h4>
                <p className="text-indigo-800 mb-3">
                  Le contrôle se fait en aval plutôt qu&apos;à chaque étape, ce qui réduit les coûts 
                  et les délais du contrôle systématique.
                </p>
              </div>
              
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h4 className="font-semibold text-teal-900 mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  8. Fonction hybride centralisée/décentralisée
                </h4>
                <p className="text-teal-800 mb-3">
                  Avec les technologies de l&apos;information, les entreprises cumulent les avantages 
                  de la centralisation et de la décentralisation (base de données centralisée + autonomie locale).
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Méthodes d&apos;optimisation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Amélioration continue</h3>
                </div>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Identification des goulots d&apos;étranglement</li>
                  <li>• Mesure des performances</li>
                  <li>• Optimisation incrémentale</li>
                  <li>• Feedback des utilisateurs</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-900">Refonte radicale</h3>
                </div>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Remise en question fondamentale</li>
                  <li>• Élimination des étapes non-valeur</li>
                  <li>• Parallélisation des tâches</li>
                  <li>• Automatisation poussée</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Indicateurs de performance
            </h2>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                📊 KPI essentiels pour les processus
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <BarChart className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-indigo-900">Efficacité</span>
                  </div>
                  <ul className="text-indigo-800 text-sm space-y-1 ml-8">
                    <li>• Temps de cycle</li>
                    <li>• Taux de défaut</li>
                    <li>• Productivité</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-indigo-900">Efficience</span>
                  </div>
                  <ul className="text-indigo-800 text-sm space-y-1 ml-8">
                    <li>• Coût par transaction</li>
                    <li>• Utilisation des ressources</li>
                    <li>• ROI des améliorations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                ⚠️ Facteurs clés de succès
              </h3>
              <div className="space-y-3 text-red-800">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <strong>Implication de la direction :</strong> Support visible et engagement des dirigeants
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <strong>Formation des équipes :</strong> Accompagnement au changement et montée en compétences
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <strong>Communication :</strong> Transparence sur les objectifs et les bénéfices attendus
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <strong>Mesure et suivi :</strong> Indicateurs de performance et ajustements continus
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                💡 Bonnes pratiques
              </h3>
              <ul className="text-green-800 space-y-2">
                <li>• Commencer par cartographier l&apos;existant</li>
                <li>• Impliquer les utilisateurs finaux dans la conception</li>
                <li>• Tester les améliorations sur un périmètre restreint</li>
                <li>• Documenter les nouveaux processus</li>
                <li>• Prévoir une période d&apos;adaptation et de formation</li>
                <li>• Mettre en place un système de feedback continu</li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link 
                href="/section-2"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Section II - Modélisation
              </Link>
              <Link 
              href="/quiz"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Quiz d&apos;évaluation
              <ArrowRight className="h-4 w-4" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}