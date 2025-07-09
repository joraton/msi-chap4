'use client';

import { Rocket, BarChart3, Network, Brain, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions des processus',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Les Processus',
    description: 'Notion de processus et lien avec le SI',
    href: '/section-1',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - Modélisation',
    description: 'Modélisation des processus avec MERISE',
    href: '/section-2',
    icon: Network,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Section III - Optimisation',
    description: 'Amélioration et optimisation des processus',
    href: '/section-3',
    icon: Brain,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    href: '/quiz',
    icon: HelpCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Cas pratiques',
    description: 'Exercices pratiques et cas concrets d\'application',
    href: '/cas-pratiques',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Questions DSCG',
    description: 'Annales du DSCG UE5 - Questions sur les processus',
    href: '/questions-dscg',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

export default function CoursePlan() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Plan du cours
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Découvrez les différentes sections de ce chapitre sur les processus et systèmes d&apos;information
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
        </div>
      </div>
    </section>
  );
}