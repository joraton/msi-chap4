'use client';

import { Target, Rocket, BarChart3, Network, Brain, HelpCircle, Award } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Plan du cours
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Suivez le parcours structuré pour maîtriser les processus et systèmes d&apos;information
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}