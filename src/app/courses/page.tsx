import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100  to-blue-100 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6  ">
            Our Robotics Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto ">
            Hands-on robotics education designed to inspire the next generation of innovators
          </p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Course Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Introduction to Line Following Robots
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our flagship robotics program introduces children to the exciting world of autonomous robots. 
                  Students learn to build, program, and test line-following robots while developing critical 
                  thinking, problem-solving, and teamwork skills.
                </p>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Students Will Learn</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Robot Assembly & Construction</h4>
                      <p className="text-gray-600">Build robots from scratch using motors, sensors, and electronic components</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Programming Fundamentals</h4>
                      <p className="text-gray-600">Learn block-based programming to control robot behavior and movements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sensor Technology</h4>
                      <p className="text-gray-600">Understand how sensors work and program robots to respond to their environment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Problem Solving & Debugging</h4>
                      <p className="text-gray-600">Develop critical thinking skills by troubleshooting and optimizing robot performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Team Collaboration</h4>
                      <p className="text-gray-600">Work in teams to design, build, and compete with robots in fun challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details & Registration */}
            <div className="space-y-8">
              {/* Age Groups */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Program Options</h3>
                
                <div className="space-y-6">
                  <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Ages 6-9 (Beginner)</h4>
                    <p className="text-blue-800 mb-4">
                      Perfect for young learners with no prior robotics experience. Focus on basic concepts, 
                      simple programming, and hands-on building activities.
                    </p>
                    <div className="text-sm text-blue-700">
                      <p><strong>Duration:</strong> 2 hour per class</p>
                      <p><strong>Classes per week:</strong> 1</p>
                      <p><strong>Price:</strong> $50 per class</p>
                    </div>
                  </div>
                  
                  <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                    <h4 className="text-xl font-semibold text-purple-900 mb-2">Ages 10-13 (Intermediate)</h4>
                    <p className="text-purple-800 mb-4">
                      For older students ready for more advanced concepts. Includes complex programming, 
                      advanced sensor integration, and competitive challenges.
                    </p>
                    <div className="text-sm text-purple-700">
                      <p><strong>Duration:</strong> 2 hours per class</p>
                      <p><strong>Classes per week:</strong> 1</p>
                      <p><strong>Price:</strong> $50 per class</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule & Location */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule & Location</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Class Schedule</h4>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Location</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 mb-2">
                        <strong>MAP Family Learning Center</strong>
                      </p>
                      <p className="text-gray-600 text-sm">
                      10 Dexter St STE <br />
                        Malden, MA 02148
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Parking:</strong> Free parking available on-site<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
                <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Join our robotics program and watch your child discover the joy of building and programming robots!
                </p>
                <Link 
                  href="/get-started"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Enroll Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
             <Footer />
    </div>
  );
} 