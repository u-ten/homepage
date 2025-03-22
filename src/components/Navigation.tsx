'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-medium hover:text-indigo-400 transition-colors"
          >
            Portfolio
          </Link>
          <div className="flex gap-8">
            <Link
              href="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-indigo-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {pathname === '/' && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0" />
              )}
              ホーム
            </Link>
            <Link
              href="/apps"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/apps'
                  ? 'text-indigo-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {pathname === '/apps' && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0" />
              )}
              アプリ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 