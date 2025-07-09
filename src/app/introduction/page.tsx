import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Rocket, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-full">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Introduction aux Processus
              </h1>
              <p className="text-gray-600">
                Concepts de base et définitions fondamentales
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Définition clé
              </h3>
              <p className="text-blue-800 text-lg">
                Un <strong>processus</strong> est un ensemble de tâches coordonnées permettant de 
                satisfaire un besoin, de répondre à une demande.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qu&apos;est-ce qu&apos;un processus ?
            </h2>
            
            <p className="text-gray-700 mb-6">
              Un processus est un ensemble d&apos;éléments hétérogènes qui sont en interrelation 
              (activité, rôle, acteur, résultat, ressources...). Le système processus présente 
              deux caractéristiques essentielles :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  🔄 Dynamique
                </h3>
                <p className="text-green-800">
                  Le système est observé sous l&apos;angle de son évolution dans le temps, 
                  et non sous l&apos;angle de sa structure.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  🎯 Orienté objectif
                </h3>
                <p className="text-purple-800">
                  Le système a une finalité et son évolution tend vers un but précis.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                💡 Point clé à retenir
              </h3>
              <p className="text-yellow-800">
                Toute entreprise correspond ainsi à des processus qui sont liés à un objectif. 
                Ces processus permettent de créer de la valeur pour les clients et les parties prenantes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Les trois catégories de processus
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Processus de pilotage</h4>
                  <p className="text-blue-800">Définissent la stratégie et orientent l&apos;organisation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Processus métiers</h4>
                  <p className="text-green-800">Créent directement de la valeur pour le client</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">Processus supports</h4>
                  <p className="text-purple-800">Soutiennent les processus métiers (RH, IT, Finance...)</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <div></div>
              <Link 
                href="/section-1"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Section I - Les Processus
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}