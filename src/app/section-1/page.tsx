import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, ArrowLeft, ArrowRight, Building2, Users, Cog } from 'lucide-react';
import Link from 'next/link';

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-full">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section I - Les Processus
              </h1>
              <p className="text-gray-600">
                Notion de processus et lien avec le système d&apos;information
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              A. Notion de processus
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                📋 Définition complète
              </h3>
              <p className="text-blue-800">
                Un processus est un ensemble d&apos;éléments hétérogènes qui sont en interrelation 
                (activité, rôle, acteur, résultat, ressources...). Il est à la fois dynamique 
                et orienté vers la réalisation d&apos;un objectif.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Exemple : Entreprise de Services Numériques (ESN)
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-4">Processus global d&apos;une ESN :</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-blue-900">Gestion RH</h5>
                  <p className="text-sm text-blue-700">Recrutement, formation, évaluation</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center">
                  <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-green-900">Gestion Projets</h5>
                  <p className="text-sm text-green-700">Planification, suivi, livraison</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <Cog className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-purple-900">Support</h5>
                  <p className="text-sm text-purple-700">Infrastructure, maintenance</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                🔍 Décomposition des processus
              </h3>
              <p className="text-yellow-800 mb-4">
                Selon les besoins, un processus global peut être décomposé en processus plus fins. 
                Par exemple, la <strong>Gestion des Formations</strong> peut se décomposer en :
              </p>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Identification des besoins de formation</li>
                <li>Planification des sessions</li>
                <li>Réalisation des formations</li>
                <li>Évaluation de l&apos;efficacité</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              B. Le lien avec le Système d&apos;Information
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-900 mb-3">
                🎯 Point crucial
              </h3>
              <p className="text-red-800 text-lg font-medium">
                C&apos;est grâce au système d&apos;information qu&apos;une organisation parvient à réaliser des processus.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Pourquoi le SI est-il essentiel ?
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Coordination nécessaire</h4>
                  <p className="text-gray-700">
                    Un processus est un enchaînement d&apos;activités réalisées par des personnes distinctes. 
                    Il nécessite donc une parfaite <strong>coordination</strong> pour éviter les retards et les erreurs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transfert d&apos;informations</h4>
                  <p className="text-gray-700">
                    Cette coordination est rendue possible par le transfert des informations ! 
                    C&apos;est le système d&apos;information qui permet de réaliser cette coordination.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Traçabilité et preuve</h4>
                  <p className="text-gray-700">
                    Dans un souci de traçabilité et de preuve, c&apos;est également grâce au système 
                    d&apos;information qu&apos;il est possible de suivre le déroulement d&apos;un processus physique.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                📊 Rôle capital de l&apos;information
              </h3>
              <div className="space-y-3 text-green-800">
                <div className="flex items-center gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">▶</span>
                  <span>Elle <strong>déclenche</strong> le processus ou ses composantes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔍</span>
                  <span>Elle permet de <strong>contrôler</strong> la bonne réalisation du processus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">📋</span>
                  <span>Elle est souvent le <strong>résultat</strong> fourni par le processus</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🧠 Moyen mnémotechnique
              </h3>
              <p className="text-gray-700 mb-2">
                Pour retenir les 3 rôles de l&apos;information, pensez à <strong>DCR</strong> :
              </p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>D</strong>éclenche</li>
                <li><strong>C</strong>ontrôle</li>
                <li><strong>R</strong>ésultat</li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link 
                href="/introduction"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Introduction
              </Link>
              <Link 
                href="/section-2"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                Section II - Modélisation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}