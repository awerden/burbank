'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Questionnaire', path: '/questionnaire' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Info', path: '/info' },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Added justify-center to center the nav items */}
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`py-4 px-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}