'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
               {/* Logo */}
               <Link href="/" className="flex items-center">
                 <span className="text-xl font-bold text-white">InnoSTEMLab</span>
               </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`text-white hover:text-blue-300 transition-colors font-medium ${
              pathname === '/' ? 'text-blue-300' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-white hover:text-blue-300 transition-colors font-medium ${
              pathname === '/about' ? 'text-blue-300' : ''
            }`}
          >
            About
          </Link>
          <Link 
            href="/faq" 
            className={`text-white hover:text-blue-300 transition-colors font-medium ${
              pathname === '/faq' ? 'text-blue-300' : ''
            }`}
          >
            FAQ
          </Link>
          <Link 
            href="/contact" 
            className={`text-white hover:text-blue-300 transition-colors font-medium ${
              pathname === '/contact' ? 'text-blue-300' : ''
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/guides" 
            className={`text-white hover:text-blue-300 transition-colors font-medium ${
              pathname === '/guides' ? 'text-blue-300' : ''
            }`}
          >
            Guides
          </Link>
          <Link 
            href="/blogs" 
            className={`text-white hover:text-blue-300 transition-colors font-medium ${
              pathname === '/blogs' ? 'text-blue-300' : ''
            }`}
          >
            Blogs
          </Link>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4 ml-6">
            <button className="text-white hover:text-blue-300 transition-colors font-medium">
              Sign In
            </button>
            <a
              href="https://forms.gle/1wzQsam8CtdphNgAA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/20 bg-black/20 backdrop-blur-sm rounded-lg">
          <div className="flex flex-col space-y-4 pt-4 px-4">
            <Link 
              href="/" 
              className={`text-white hover:text-blue-300 transition-colors font-medium py-2 ${
                pathname === '/' ? 'text-blue-300' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-white hover:text-blue-300 transition-colors font-medium py-2 ${
                pathname === '/about' ? 'text-blue-300' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/faq" 
              className={`text-white hover:text-blue-300 transition-colors font-medium py-2 ${
                pathname === '/faq' ? 'text-blue-300' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
                   <Link 
                     href="/contact" 
                     className={`text-white hover:text-blue-300 transition-colors font-medium py-2 ${
                       pathname === '/contact' ? 'text-blue-300' : ''
                     }`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Contact
                   </Link>
                   <Link 
                     href="/guides" 
                     className={`text-white hover:text-blue-300 transition-colors font-medium py-2 ${
                       pathname === '/guides' ? 'text-blue-300' : ''
                     }`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Guides
                   </Link>
                   <Link 
                     href="/blogs" 
                     className={`text-white hover:text-blue-300 transition-colors font-medium py-2 ${
                       pathname === '/blogs' ? 'text-blue-300' : ''
                     }`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Blogs
                   </Link>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
              <button className="text-white hover:text-blue-300 transition-colors font-medium py-2 text-left">
                Sign In
              </button>
              <a
                href="https://forms.gle/1wzQsam8CtdphNgAA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 