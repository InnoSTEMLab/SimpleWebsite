'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';
import { useMemo } from 'react';
import { courses } from '../data/courses';

export default function Navigation() {
  const pathname = usePathname();
  const { user, logout } = useUser();
  const { getTotalItems } = useCart();
  
  // Use useMemo to prevent unnecessary recalculations
  const totalItems = useMemo(() => {
    return getTotalItems();
  }, [getTotalItems]);

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
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 min-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {Array.from(new Set(courses.map(course => course.category))).map(category => (
                <Link 
                  key={category}
                  href={`/courses?category=${category.toLowerCase()}`} 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  {category}
                </Link>
              ))}
              <div className="border-t border-gray-200 my-1"></div>
              <Link 
                href="/courses" 
                className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded font-medium"
              >
                View All Programs
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
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Welcome, {user.fullName}
              </span>
              <Link 
                href="/cart" 
                className="relative text-gray-700 hover:text-blue-600 transition-colors"
                title="Shopping Cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link 
                href="/signin" 
                className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-bold"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 