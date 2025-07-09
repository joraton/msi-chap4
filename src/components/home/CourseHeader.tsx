import { BookOpen, Clock, Target } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 overflow-x-auto">
        <div className="flex items-center whitespace-nowrap min-w-max">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-blue-600">MSI - Processus et SI</span>
        </div>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-3 sm:p-4 rounded-lg flex-shrink-0 mx-auto sm:mx-0">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
              MSI - Processus et Système d&apos;Information
            </h1>
            <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              Maîtrisez les concepts fondamentaux des processus métier et leur intégration 
              dans les systèmes d&apos;information. Apprenez la modélisation MERISE et 
              l&apos;optimisation des processus organisationnels.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}