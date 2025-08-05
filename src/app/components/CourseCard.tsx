'use client';

import { useState, useEffect } from 'react';
import { Course, AgeGroup } from '../data/courses';
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: { bg: string; border: string; button: string; hover: string } } = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', button: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', button: 'bg-purple-600', hover: 'hover:bg-purple-700' },
    green: { bg: 'bg-green-50', border: 'border-green-200', button: 'bg-green-600', hover: 'hover:bg-green-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', button: 'bg-orange-600', hover: 'hover:bg-orange-700' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', button: 'bg-teal-600', hover: 'hover:bg-teal-700' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', button: 'bg-indigo-600', hover: 'hover:bg-indigo-700' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', button: 'bg-pink-600', hover: 'hover:bg-pink-700' },
    red: { bg: 'bg-red-50', border: 'border-red-200', button: 'bg-red-600', hover: 'hover:bg-red-700' }
  };
  return colorMap[color] || colorMap.blue;
};

export default function CourseCard({ course }: CourseCardProps) {
  const { user } = useUser();
  const { addToCart } = useCart();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('');
  const [addingToCart, setAddingToCart] = useState<boolean>(false);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  // Set default selected age group to the first one
  useEffect(() => {
    if (course.ageGroups.length > 0 && !selectedAgeGroup) {
      setSelectedAgeGroup(course.ageGroups[0].id);
    }
  }, [course.ageGroups, selectedAgeGroup]);

  const handleAddToCart = async () => {
    if (!user) {
      window.location.href = '/signup';
      return;
    }

    if (!selectedAgeGroup) {
      alert('Please select an age group first.');
      return;
    }

    const ageGroup = course.ageGroups.find(ag => ag.id === selectedAgeGroup);
    if (!ageGroup) {
      alert('Selected age group not found.');
      return;
    }

    setAddingToCart(true);
    
    try {
      addToCart({
        id: ageGroup.id,
        name: `${course.title} (${ageGroup.name})`,
        price: ageGroup.price
      });
      
      setAddedItems(prev => new Set(prev).add(ageGroup.id));
      
      setTimeout(() => {
        setAddedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(ageGroup.id);
          return newSet;
        });
      }, 2000);
      
    } catch (error) {
      alert('Failed to add to cart. Please try again.');
    } finally {
      setAddingToCart(false);
    }
  };

  const selectedAgeGroupData = course.ageGroups.find(ag => ag.id === selectedAgeGroup);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">{course.title}</h3>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            {course.category}
          </span>
        </div>
        <p className="text-blue-100 mb-4">{course.description}</p>
        <div className="flex items-center space-x-4 text-sm">
          <span className="bg-white/20 px-2 py-1 rounded">
            {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
          </span>
          <span className="bg-white/20 px-2 py-1 rounded">
            {course.ageGroups.length} Age Groups
          </span>
        </div>
      </div>

      {/* Course Features */}
      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-4">What Students Will Learn</h4>
        <div className="space-y-3 mb-6">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Age Group Selection and Add to Cart */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Program Options</h4>
          
          {/* Age Group Dropdown */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Select Age Group
            </label>
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {course.ageGroups.map((ageGroup) => (
                <option key={ageGroup.id} value={ageGroup.id}>
                  {ageGroup.name} - ${ageGroup.price} per class
                </option>
              ))}
            </select>
          </div>

          {/* Selected Age Group Details */}
          {selectedAgeGroupData && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h5 className="font-semibold text-gray-900">{selectedAgeGroupData.name}</h5>
                  <p className="text-gray-700 text-sm mt-1">{selectedAgeGroupData.description}</p>
                </div>
                <span className="text-lg font-bold text-gray-900">${selectedAgeGroupData.price}</span>
              </div>
              
              <div className="text-sm text-gray-600">
                <p><strong>Duration:</strong> {selectedAgeGroupData.duration}</p>
                <p><strong>Classes per week:</strong> {selectedAgeGroupData.classesPerWeek}</p>
                <p><strong>Price:</strong> ${selectedAgeGroupData.price} per class</p>
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          {user ? (
            <button
              onClick={handleAddToCart}
              disabled={addingToCart || !selectedAgeGroup}
              className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                addedItems.has(selectedAgeGroup) ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              {addingToCart 
                ? 'Adding...' 
                : addedItems.has(selectedAgeGroup) 
                  ? 'Added!' 
                  : 'Add to Cart'
              }
            </button>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-3">Sign up to enroll in this course</p>
              <Link
                href="/signup"
                className="inline-block bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign Up Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 