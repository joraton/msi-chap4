import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <CourseHeader />
      
      {/* Course Plan */}
      <CoursePlan />
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-gray-600 px-4">
             © 2024 Cours MSI - Chapitre 4 : Processus et Systèmes d&apos;Information
           </p>
        </div>
      </footer>
    </div>
  );
}
