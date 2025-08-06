import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our robotics programs, enrollment process, and what to expect.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">What will my child get out of this course?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Your child will develop essential STEM skills including programming, problem-solving, critical thinking, and creativity. They&apos;ll learn to build and program robots, work with sensors and circuits, and participate in hands-on projects that make learning fun and engaging.
                </p>
              </div>
            </details>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">How much does it cost to enroll in this course?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Our courses are priced at $50 per class. We offer programs for ages 6-9 and 10-13. You can enroll for individual classes or multiple sessions. Contact us for special pricing on package deals.
                </p>
              </div>
            </details>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">Can I sign up multiple kids?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Absolutely! We welcome multiple children from the same family. Each child will be placed in the appropriate age group and receive personalized attention. 
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">What age groups do you serve?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  We offer programs for children ages 6-13, with age-appropriate curriculum and activities. Ages 6-9 focus on basic robotics concepts and simple programming, while ages 10-13 explore more advanced topics and complex projects.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">Do you offer trial classes?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Yes! We offer a free trial class so your child can experience our program before enrolling. This allows them to meet our instructors, see our facilities, and get a feel for our teaching style. Contact us to schedule a trial class.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">What equipment do students need?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  All equipment and materials are provided during class. Students just need to bring their enthusiasm! We provide robots, computers, programming software, and all necessary tools. For take-home projects, we may provide kits for an additional fee.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">Can parents observe classes?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Absolutely! We welcome parents to observe and even participate in special family sessions.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">What is the class schedule?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Currently, the classes are held on Saturdays 10am-12pm. 
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">Is there a maximum class size?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  We maintain small class sizes to ensure personalized attention. This allows us to provide individual guidance and ensure every child gets the support they need.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">What happens if my child misses a class?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  We understand that children may need to miss classes occasionally. We can provide online resources and videos so students can catch up on missed material. Please notify us in advance when possible.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-xl font-semibold text-gray-900">Do you offer summer camps?</span>
                <svg className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Yes! We offer summer robotics camps that run for 6-8 weeks. These intensive programs allow students to work on extended projects and participate in special challenges. Summer camps are a great way to dive deeper into robotics and make new friends.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/1wzQsam8CtdphNgAA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign Up for Updates
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 