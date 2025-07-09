import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`${bgColor} p-3 rounded-full`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className={`px-6 py-2 ${color.replace('text-', 'bg-')} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}
        >
          Commencer
        </Link>
      </div>
    </motion.div>
  );
}