import { BookOpen, Clock, Target } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600">MSI - Processus et Système d&apos;Information</span>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-4 rounded-lg">
            <BookOpen className="h-8 w-8" />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">
              MSI - Processus et Système d&apos;Information
            </h1>
            <p className="text-blue-100 mb-6 text-lg">
              Maîtrisez les concepts fondamentaux des processus métier et leur intégration 
              dans les systèmes d&apos;information. Apprenez la modélisation MERISE et 
              l&apos;optimisation des processus organisationnels.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}