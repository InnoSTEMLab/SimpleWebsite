import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-100 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About InnoSTEMLab
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering the next generation of innovators through hands-on robotics education
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Our startup began with a simple but powerful mission: to make robotics education fun, accessible, and empowering for kids from all backgrounds. We believe that every child should have the opportunity to explore technology, develop critical thinking skills, and discover the joy of building and programming robots.
                </p>
                <p>
                  What started as a volunteer-driven afterschool program for the Nepali community quickly grew into something more. The overwhelming support and enthusiasm from parents and students inspired us—five passionate co-founders—to build an organization that could bring hands-on robotics education to more children across the United States.
                </p>
                <p>
                  Today, we&apos;re proud to offer affordable, beginner-friendly robotics programs that teach kids how to assemble, code, and bring their ideas to life. Whether it&apos;s a simple line-following robot or a creative group project, our goal is to nurture the next generation of makers, inventors, and problem-solvers—one robot at a time.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/Kids_playingWithRobot.jpg" 
                width={600} 
                height={400} 
                alt="Children learning robotics" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We&apos;re committed to fostering creativity, critical thinking, and a love for technology in every child we teach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-orange-800 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We believe in fostering creative thinking and innovative problem-solving skills through hands-on robotics projects.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-200">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Education</h3>
              <p className="text-gray-700">
                We&apos;re dedicated to making complex robotics concepts accessible and engaging for children of all ages and skill levels.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Community</h3>
              <p className="text-gray-700">
                We build a supportive community where children can learn, grow, and develop lasting friendships through shared interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-6">Our Teaching Approach</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We&apos;ve developed a unique methodology that combines hands-on learning with age-appropriate curriculum design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Hands-On Learning</h3>
                  <p className="text-gray-700">
                    Every class involves building, programming, and testing real robots. Children learn by doing, not just watching.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Age-Appropriate Curriculum</h3>
                  <p className="text-gray-700">
                    Our programs are specifically designed for different age groups, ensuring each child gets the right level of challenge and support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Personalized Learning</h3>
                  <p className="text-gray-700">
                    Our small group format ensures every child receives personalized attention and guidance from our experienced instructors.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Project-Based Learning</h3>
                  <p className="text-gray-700">
                    Children work on real projects like line-following robots, developing problem-solving skills and creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="/kids2.jpg" 
                width={600} 
                height={400} 
                alt="Children working on robotics projects" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-amber-800 mb-6">Ready to Stay Updated?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Sign up to receive updates about our robotics programs, upcoming events, and educational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 