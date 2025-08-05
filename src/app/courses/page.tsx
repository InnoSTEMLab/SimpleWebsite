'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { useUser } from '../contexts/UserContext';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CoursesPage() {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const category = courses.find(course => 
        course.category.toLowerCase() === categoryParam.toLowerCase()
      )?.category;
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, [searchParams]);

  // Get unique categories and difficulties
  const categories = ['all', ...Array.from(new Set(courses.map(course => course.category)))];
  const difficulties = ['all', ...Array.from(new Set(courses.map(course => course.difficulty)))];

  // Filter courses based on selected filters
  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Educational Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of STEM programs designed to inspire and educate the next generation of innovators
          </p>
          <div className="text-lg text-gray-700">
            <p>From robotics to coding, electronics to 3D design</p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredCourses.length} Program{filteredCourses.length !== 1 ? 's' : ''} Available
            </h2>
            {(selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
              <p className="text-gray-600">
                Showing {filteredCourses.length} program{filteredCourses.length !== 1 ? 's' : ''}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                {selectedDifficulty !== 'all' && ` at ${selectedDifficulty} level`}
              </p>
            )}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No programs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to see more programs.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Schedule & Location */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Schedule & Location</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Class Schedule</h4>
                <div className="space-y-3 text-blue-100">
                  <div className="flex justify-between items-center">
                    <span>Saturday:</span>
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday:</span>
                    <span>2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weekday Evenings:</span>
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Location</h4>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-blue-100 mb-2">
                    <strong>MAP Family Learning Center</strong>
                  </p>
                  <p className="text-blue-100 text-sm">
                    10 Dexter St STE <br />
                    Malden, MA 02148
                  </p>
                  <p className="text-blue-100 text-sm mt-2">
                    <strong>Parking:</strong> Free parking available on-site<br />
                    <strong>Accessibility:</strong> Wheelchair accessible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our programs and watch your child discover the joy of learning through hands-on STEM education!
            </p>
            {user ? (
              <p className="text-lg opacity-90">
                You're signed in! Add programs to your cart above to get started.
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Sign Up to Get Started
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 