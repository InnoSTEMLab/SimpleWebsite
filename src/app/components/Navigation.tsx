'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/innostemlab_logo.png" width={100} height={100} alt="InnoSTEMLab Logo" />
        </Link>
        <div className="flex items-center space-x-6">
          <Link 
            href="/" 
            className={`text-xl font-bold transition-colors ${
              pathname === '/' 
                ? 'text-blue-600' 
                : 'text-gray-800 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
                      <Link 
              href="/about" 
              className={`text-xl font-bold transition-colors ${
                pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              About
            </Link>
          <div className="relative group">
            <button className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Courses
            </button>
                          <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 min-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Link href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Introduction to Line Following Robots
                </Link>
              </div>
          </div>
          <Link 
            href="/scratch" 
            className={`text-xl font-bold transition-colors ${
              pathname === '/scratch' 
                ? 'text-blue-600' 
                : 'text-gray-800 hover:text-blue-600'
            }`}
          >
            Scratch Programming
          </Link>
          <Link 
            href="/faq" 
            className={`text-xl font-bold transition-colors ${
              pathname === '/faq' 
                ? 'text-blue-600' 
                : 'text-gray-800 hover:text-blue-600'
            }`}
          >
            FAQ
          </Link>
          <Link 
            href="/get-started" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
} 