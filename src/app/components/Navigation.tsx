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
            href="/contact" 
            className={`text-xl font-bold transition-colors ${
              pathname === '/contact' 
                ? 'text-blue-600' 
                : 'text-gray-800 hover:text-blue-600'
            }`}
          >
            Contact
          </Link>
          <a 
            href="https://forms.gle/1wzQsam8CtdphNgAA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-bold"
          >
            Sign Up for Updates
          </a>
        </div>
      </div>
    </nav>
  );
} 