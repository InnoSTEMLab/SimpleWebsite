import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section 1 */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/frontpage.jpg)'}}>
        <div className="absolute  bg-[url(/frontpage.jpg)] bg-opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white bg-opacity-90 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                InnoSTEMLab Robotics Course
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
                Unlock Your Child's Potential with Robotics!
              </p>
              <p className="text-lg lg:text-xl text-gray-600 mb-8">
                Is your child ready to explore the world of robotics? 
                Our Robotics Course offers an exciting opportunity 
                for young learners to dive into the world of innovation and technology. 
                With hands-on projects and expert guidance, your child will develop valuable skills in coding, 
                problem-solving, and creativity—all while having fun!
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Sign Up for Updates
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Image 
                src="/Flyer_Image.jpg" 
                alt="Robotics Course Flyer" 
                width={400} 
                height={500} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-16">
            Master the Skills, Conquer the Challenge
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <Image 
                src="/kids2.jpg" 
                alt="Introduction to Basics" 
                width={300} 
                height={200} 
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Basics</h3>
              <p className="text-gray-600">
                Learn to build circuits, assemble robots, and program sensors through hands-on exploration of core engineering principles.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <Image 
                src="/handson.jpg" 
                alt="Laboratories" 
                width={300} 
                height={200} 
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Laboratories</h3>
              <p className="text-gray-600">
                Work in fully equipped labs where ideas come to life through testing, prototyping, and real-world problem solving.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <Image 
                src="/frontpage.jpg" 
                alt="Competitions" 
                width={300} 
                height={200} 
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitions</h3>
              <p className="text-gray-600">
                Put your skills to the test in exciting competitions that challenge your creativity, teamwork, and technical know-how.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - Image Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-16">
            The Playground for Future Programmers and Creators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src="/kids1.jpg" 
                alt="Kids learning robotics" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src="/kids2.jpg" 
                alt="Kids learning robotics" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src="/kids3.jpg" 
                alt="Kids learning robotics" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src="/kids4.jpg" 
                alt="Kids learning robotics" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src="/Flyer_Image.jpg" 
                alt="Robotics course flyer" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src="/Kids_playingWithRobot.jpg" 
                alt="Kids playing with robot" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
