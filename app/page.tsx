import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Student Portal</h1>
      <p className="mb-8 text-gray-600 text-lg text-center">
        Welcome to the student registration portal. <br />
        Please register below to get started.
      </p>
      
      <Link 
        href="/register" 
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
      >
        Go to Registration Form
      </Link>
    </main>
  );
}
