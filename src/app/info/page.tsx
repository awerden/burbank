import Image from 'next/image';
import Link from 'next/link';

export default function InfoPage() {
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
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto p-8">
          {/* Semi-transparent white box with black text */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-8 text-black">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Retreat Schedule
            </h1>
            <p className="text-lg text-center mb-6">
              Please fill out the pre-retreat survey first
            </p>
            <div className="flex justify-center">
              <Link 
                href="/questionnaire"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Questionnaire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}