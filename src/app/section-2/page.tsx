import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Network, ArrowLeft, ArrowRight, Zap, Settings, CheckCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Section2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-full">
              <Network className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section II - La Modélisation des Processus
              </h1>
              <p className="text-gray-600">
                Méthode MERISE Événement/Résultat
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                🎯 Objectif de la modélisation
              </h3>
              <p className="text-blue-800">
                La modélisation permet de représenter un processus en distinguant son contenu 
                (qui est stable) des aspects concrets (qui peuvent évoluer). Dans le cadre des 
                examens d&apos;expertise comptable, nous utilisons la méthode <strong>MERISE ÉVÉNEMENT/RÉSULTAT</strong>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les 5 concepts fondamentaux
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-yellow-900">1. L&apos;événement</h3>
                </div>
                <p className="text-yellow-800">
                  Tout fait qui sollicite le système d&apos;information. C&apos;est le déclencheur 
                  qui initie une action dans le processus.
                </p>
                <div className="mt-3 p-3 bg-yellow-100 rounded">
                  <strong>Exemple :</strong> Réception d&apos;une commande client, arrivée d&apos;une facture fournisseur
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900">2. La synchronisation</h3>
                </div>
                <p className="text-blue-800">
                  Elle permet de hiérarchiser les événements et de définir les conditions 
                  nécessaires pour déclencher une opération.
                </p>
                <div className="mt-3 p-3 bg-blue-100 rounded">
                  <strong>Exemple :</strong> ET, OU, conditions temporelles
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-900">3. L&apos;opération</h3>
                </div>
                <p className="text-green-800">
                  Elle se compose d&apos;un ensemble ininterruptible de tâches. Une fois commencée, 
                  l&apos;opération doit être menée à son terme.
                </p>
                <div className="mt-3 p-3 bg-green-100 rounded">
                  <strong>Exemple :</strong> Traitement d&apos;une commande, validation d&apos;un dossier
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-purple-900">4. Les règles d&apos;émission</h3>
                </div>
                <p className="text-purple-800">
                  Les conditions à remplir pour créer tel ou tel résultat. Elles définissent 
                  la logique métier du processus.
                </p>
                <div className="mt-3 p-3 bg-purple-100 rounded">
                  <strong>Exemple :</strong> Si montant {'>'} 1000€ alors validation manager requise
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-900">5. Le résultat</h3>
                </div>
                <p className="text-red-800">
                  C&apos;est l&apos;élément obtenu à l&apos;issue de l&apos;opération, et qui peut à son tour 
                  constituer un événement pour un autre processus.
                </p>
                <div className="mt-3 p-3 bg-red-100 rounded">
                  <strong>Exemple :</strong> Bon de commande émis, facture générée
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🧠 Moyen mnémotechnique - ESOR
              </h3>
              <p className="text-gray-700 mb-3">
                Pour retenir les 5 concepts, pensez à <strong>ESOR + R</strong> :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
                <div className="bg-yellow-200 p-2 rounded text-center">
                  <strong>E</strong>vénement
                </div>
                <div className="bg-blue-200 p-2 rounded text-center">
                  <strong>S</strong>ynchronisation
                </div>
                <div className="bg-green-200 p-2 rounded text-center">
                  <strong>O</strong>pération
                </div>
                <div className="bg-purple-200 p-2 rounded text-center">
                  <strong>R</strong>ègles d&apos;émission
                </div>
                <div className="bg-red-200 p-2 rounded text-center">
                  <strong>R</strong>ésultat
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                💡 Exemple pratique simple
              </h3>
              <p className="text-green-800 mb-4">
                <strong>Événement :</strong> Réception d&apos;une commande client
              </p>
              <p className="text-green-800 mb-4">
                <strong>Synchronisation :</strong> Vérification de la disponibilité des stocks
              </p>
              <p className="text-green-800 mb-4">
                <strong>Opération :</strong> Préparation et expédition de la commande
              </p>
              <p className="text-green-800 mb-4">
                <strong>Règles d&apos;émission :</strong> Si stock suffisant ET client solvable
              </p>
              <p className="text-green-800">
                <strong>Résultat :</strong> Commande expédiée et facture émise
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                📋 Illustration : Transcription d&apos;entretien - Cabinet COMPTA-CONSEIL
              </h3>
              <div className="bg-white rounded-lg p-4 space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-900">M. Dupont :</p>
                  <p className="text-gray-700">Pourriez-vous me décrire comment vous procédez pour démarcher vos clients?</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-900">Le Directeur :</p>
                  <p className="text-gray-700">Je me base sur mes contacts personnels et ceux de mes chefs de groupe qu&apos;ils m&apos;envoient par messagerie. Tous les jours, je consulte la liste de ces contacts et j&apos;essaie de les joindre.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-900">M. Dupont :</p>
                  <p className="text-gray-700">Est-ce vous qui faites l&apos;analyse des besoins du client ?</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-900">Le Directeur :</p>
                  <p className="text-gray-700">Deux cas se présentent. S&apos;il s&apos;agit d&apos;un ancien client, je lui propose le type de mission qu&apos;on a déjà réalisé pour lui dans le passé.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-900">M. Dupont :</p>
                  <p className="text-gray-700">Et pour les nouveaux clients ?</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-900">Le Directeur :</p>
                  <p className="text-gray-700">J&apos;envoie un chef de groupe rencontrer le prospect pour analyser ses besoins.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-900">M. Dupont :</p>
                  <p className="text-gray-700">Est-ce que ce chef de groupe devient responsable du client ?</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-900">Le Directeur :</p>
                  <p className="text-gray-700">Oui, après analyse des besoins, le chef de groupe doit me donner les disponibilités et les compétences de son équipe pour réaliser les nouvelles missions pour ce client.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-900">M. Dupont :</p>
                  <p className="text-gray-700">Est-ce que cela vous permet de vous engager sur une date d&apos;échéance pour une mission?</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-900">Le Directeur :</p>
                  <p className="text-gray-700">Tout à fait!</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Exercice :</strong> À partir de cette transcription, identifiez les événements, synchronisations, opérations, règles d&apos;émission et résultats du processus de démarchage commercial.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Analyse du processus : Cabinet COMPTA-CONSEIL
            </h2>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                📋 Processus de démarchage client
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Zap className="inline h-4 w-4 text-yellow-600 mr-2" />
                    Événements déclencheurs :
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Réception de contacts personnels</li>
                    <li>• Envoi de contacts par les chefs de groupe</li>
                    <li>• Consultation quotidienne de la liste</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Settings className="inline h-4 w-4 text-green-600 mr-2" />
                    Opérations :
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Prise de contact téléphonique</li>
                    <li>• Analyse des besoins (ancien vs nouveau client)</li>
                    <li>• Envoi d&apos;un chef de groupe si nouveau client</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <CheckCircle className="inline h-4 w-4 text-purple-600 mr-2" />
                    Règles d&apos;émission :
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Si ancien client → proposition de missions passées</li>
                    <li>• Si nouveau client → envoi chef de groupe pour analyse</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <FileText className="inline h-4 w-4 text-red-600 mr-2" />
                    Résultats :
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Proposition commerciale</li>
                    <li>• Rapport d&apos;analyse des besoins</li>
                    <li>• Attribution du chef de groupe responsable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                ⚠️ Points d&apos;attention
              </h3>
              <ul className="text-orange-800 space-y-2">
                <li>• La modélisation doit être <strong>indépendante</strong> de l&apos;organisation actuelle</li>
                <li>• Se concentrer sur le <strong>contenu stable</strong> du processus</li>
                <li>• Éviter les détails techniques qui peuvent changer</li>
                <li>• Privilégier la <strong>logique métier</strong> aux aspects organisationnels</li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link 
                href="/section-1"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Section I - Les Processus
              </Link>
              <Link 
                href="/section-3"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                Section III - Optimisation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}