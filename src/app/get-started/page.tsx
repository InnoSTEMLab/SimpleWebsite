'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';

export default function GetStarted() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: '',
    teamSize: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Calculate total amount (1 class = $50)
      const totalAmount = 50.00;
      
      // Save enrollment to database
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          childName: formData.name,
          parentEmail: formData.email,
          childAge: parseInt(formData.company),
          previousExperience: formData.teamSize,
          programCode: formData.plan,
          numClasses: 1,
          totalAmount: totalAmount
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Enrollment saved:', data);
        
        // Redirect to payment page with enrollment data
        const params = new URLSearchParams({
          childName: formData.name,
          program: formData.plan,
          numClasses: '1',
          enrollmentId: data.enrollmentId
        });
        
        router.push(`/payment?${params.toString()}`);
      } else {
        console.error('Enrollment failed:', data.error);
        alert('Failed to save enrollment. Please try again.');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enroll Your Child in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}InnoSTEMLab
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Give your child the gift of robotics education. Our expert-led programs are designed to inspire creativity, build confidence, and develop essential STEM skills.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">Step {currentStep} of 3</span>
            <span className="text-sm text-gray-500">Enrollment Process</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tell us about your child</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900 placeholder-gray-600"
                    placeholder="Enter your child's full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent's Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900 placeholder-gray-600"
                    placeholder="Enter parent's email address"
                    required
                  />
                </div>
              </div>

                              <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Age
                  </label>
                  <input
                    type="number"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900 placeholder-gray-600"
                    placeholder="Enter child's age (e.g., 8)"
                    min="5"
                    max="18"
                  />
                </div>

              <div className="flex justify-end pt-6">
                <button
                  onClick={nextStep}
                  disabled={!formData.name || !formData.email}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose your program</h2>
              
                              <div className="grid md:grid-cols-2 gap-6">
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    formData.plan === 'ages-6-9' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                                      onClick={() => setFormData({...formData, plan: 'ages-6-9'})}
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold text-red-500">Ages 6-9</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Introduction to Line Following Robots</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$50<span className="text-lg text-gray-500">/class</span></div>
                    <p className="text-gray-600 mb-4">Perfect for young beginners, new to robotics</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ 2 classes per week</li>
                      <li>✓ Basic robot building</li>
                      <li>✓ Simple programming</li>
                      <li>✓ Take-home projects</li>
                      <li>✓ Competition</li>
                    </ul>
                  </div>
                </div>

                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    formData.plan === 'ages-10-13' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                                      onClick={() => setFormData({...formData, plan: 'ages-10-13'})}
                >
                  <div className="text-center">
                    {/* <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">Most Popular</div> */}
                    <div className="text-lg font-semibold text-red-500">Ages 10-13</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Introduction to Line Following Robots</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$50<span className="text-lg text-gray-500">/class</span></div>
                    <p className="text-gray-600 mb-4">Great for older kids with some experience</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ 2 classes per week</li>
                      <li>✓ Advanced robot building</li>
                      <li>✓ Coding with sensors</li>
                      <li>✓ Take-home projects</li>
                      <li>✓ Competition</li>
                    </ul>
                  </div>
                </div>

                
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={prevStep}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.plan}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional information</h2>
              
                              <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Robotics Experience
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900"
                  >
                    <option value="">Select experience level</option>
                    <option value="None">No experience</option>
                    <option value="Beginner">Some basic experience</option>
                    <option value="Intermediate">Moderate experience</option>
                    <option value="Advanced">Extensive experience</option>
                  </select>
                </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Summary</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Child's Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parent's Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span>Child's Age:</span>
                      <span className="font-medium">{formData.company} years old</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Program:</span>
                    <span className="font-medium capitalize">{formData.plan}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={prevStep}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  ← Back
                </button>
                                  <button
                    onClick={handleSubmit}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Complete Enrollment
                  </button>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our enrollment team</Link>
          </p>
          <p className="text-sm text-gray-500">
            By enrolling, you agree to our Terms of Service and Privacy Policy. All classes are subject to availability.
          </p>
        </div>
      </main>
    </div>
  );
} 