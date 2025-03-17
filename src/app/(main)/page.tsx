import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/mountain-range.jpg"
          alt="Mountain Range"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content container */}
      <div className="relative flex items-center justify-center min-h-screen pt-16">
        <div className="relative z-10 max-w-4xl mx-auto p-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-8 text-black">
            <h1 className="text-4xl font-bold mb-6 text-center">
              Burbank GA Retreat
            </h1>
            <div className="space-y-6 text-center">
              <p className="text-lg">
                Welcome to the Burbank GA Retreat planning portal.
              </p>
              <Link 
                href="/questionnaire" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Questionnaire
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="bg-blue-50/50 backdrop-blur-sm p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
                <p>
                  Please complete our pre-retreat questionnaire to help us better understand your needs and expectations.
                </p>
              </div>
              <div className="bg-blue-50/50 backdrop-blur-sm p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">Important Dates</h2>
                <p>
                  We&apos;re planning for either September/October 2025 or March/April 2026. Check the schedule page for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}